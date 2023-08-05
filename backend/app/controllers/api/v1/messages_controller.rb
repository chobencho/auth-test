class Api::V1::MessagesController < ApplicationController
    def index
        user_id1 = params[:id].to_i
        room_ids = RoomMember.where(user_id: user_id1).pluck(:room_id)
        rooms = []
        room_ids.each do |room_id|
            room = RoomMember.where(room_id: room_id).pluck(:user_id).reject { |user_id| user_id == user_id1 }
            rooms << room
        end
        flattened_rooms = rooms.flatten 

        chats = []
        flattened_rooms.each do |user_id|
            user = User.where(id: user_id)
            chats << user
        end
        chatUsers = chats.flatten

        json_data = chatUsers.map.with_index do |user, index|
            user_data = user.as_json
            user_data["room_id"] = room_ids[index]
            user_data
        end
        render json: json_data
    end


    def create
        # チャットしたい相手と自分のユーザIDを取得
        user_id = params[:id].to_i
        my_id = params[:string_my_id].to_i
        # トランザクションを実行
        ActiveRecord::Base.transaction do
            begin
                # 新しいチャットルームのルームIDを決定
                # room_idのレコードがあれば最新レコード+1, 無ければ1で作成
                if Room.order(created_at: :desc).pluck(:room_id).first
                    new_value = Room.order(created_at: :desc).pluck(:room_id).first + 1
                else
                    new_value = 1
                end
                # 新規チャットルーム作成、新規チャットルームに属するユーザを登録
                Room.create(room_id: new_value)
                RoomMember.create(room_id: new_value, user_id: user_id)
                RoomMember.create(room_id: new_value, user_id: my_id)
                render json: { room_create: true, message: "チャットルームを作成しました" }
            rescue ActiveRecord::RecordInvalid => e
                render json: { room_create: false, message: "チャットルームの作成に失敗しました" }
            end
        end
    end
end

