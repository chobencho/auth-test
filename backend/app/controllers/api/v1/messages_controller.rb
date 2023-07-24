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

    def chatPartner
        @partner = User.find_by(id: params[:id])
        render json: @partner
    end

    def show
        @messages = Message.where(room_id: params[:id])

        render json: @messages
    end

    def destroy
        room_id = params[:id].to_i
        ActiveRecord::Base.transaction do
            begin
                @messages = Message.where(room_id: room_id).destroy_all
                @room = Room.find_by(room_id: room_id).destroy
                @roomMember = RoomMember.where(room_id: room_id).destroy_all
                render json: { room_destroy: true, message: "チャットを削除しました" }
            rescue ActiveRecord::RecordInvalid => e
                render json: { room_destroy: false, message: "チャットの削除に失敗しました" }
            end
        end
    end

    def create
        message = Message.new(message_params)  
        message.save
    end

    def chatCreate
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

    def exist
        user_id = params[:user_id].to_i
        my_id = params[:string_my_id].to_i
    
        room_id_1 = RoomMember.where(user_id: user_id).pluck(:room_id)
        room_id_2 = RoomMember.where(user_id: my_id).pluck(:room_id)

        common_room_id = room_id_1 & room_id_2

        if common_room_id.present?
            render json: common_room_id
          else
            render json: nil
        end
      end

    private

    def message_params
        params.permit(:room_id, :user_id, :body)
    end
end

