class Api::V1::VerificationsController < ApplicationController
    def create
        id = params[:id]

        @deleteCertificateImage = CheckAge.where(user_id: id).destroy_all

        @verification = CheckAge.new(verification_params) 

        if @verification.save
            render json: {status: 200, message: "証明書の登録に成功しました。"}
        else
            render json: {status: 404, message: "証明書の登録に失敗しました。最初からやり直してください。"}
        end
    end

    def sendMail
        id = params[:string_my_id]
        name = params[:name]
        email = params[:email]
        message = params[:message]
        image = params[:image]

        if image.present?
            uploaded_file = image
            
            File.open(Rails.root.join('public', 'uploads', uploaded_file.original_filename), 'wb') do |file|
                file.write(uploaded_file.read)
            end

            image_url = "http://localhost:3001/uploads/check_age/image/#{id}/#{uploaded_file.original_filename}"
            ContactMailer.contact_email(id, email, image_url).deliver_now

            render json: {status: 200, message: "証明書を管理者に送信しました。"}
        else
            render json: {status: 404, message: "証明書の管理者への送信に失敗しました。最初からやり直してください。"}
        end

    end

    private

    def verification_params
        params.permit(:user_id, :check_age, :image)
    end

end
