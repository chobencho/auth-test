class Api::V1::Auth::PasswordsController < ApplicationController
  respond_to :json

  def create
    user = User.find_by(email: params[:email])

    if user
      user.send_reset_password_instructions
      send_reset_mail_success
    else
      reset_password_failed
    end
  end


  def update
    user = User.reset_password_by_token(
      reset_password_token: params[:reset_password_token],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
  
    if user.errors.empty?
      reset_password_success
    else
      reset_password_failed
    end
  end

  private

  def respond_with(resource, _opts = {})
    send_reset_mail_success && return unless resource.present?
    reset_password_success && return if resource.persisted?

    reset_password_failed
  end

  def send_reset_mail_success
    render json: { message: 'Send Reset Mail sucessfully.' }
  end

  def reset_password_success
    render json: { message: 'Password Reset sucessfully.' }
  end

  def reset_password_failed
    render json: { message: "Something went wrong." }
  end
end


