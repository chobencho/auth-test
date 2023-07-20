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

    def show
        @messages = Message.where(room_id: params[:id])

        render json: @messages
    end
end

