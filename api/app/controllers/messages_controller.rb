class MessagesController < ApplicationController

  def index

  end

  def show
    
  end

  def new
    Room.create(room_id: 1)
    Room_member.create()
  end

  def create

  end

end
