class Api::V1::VerificationsController < ApplicationController
    def create
<<<<<<< HEAD
       @verification = CheckAge.new(verification_params) 
       if @verification.save
            render json: {status: 200, message: "証明書の送信に成功しました。"}
       else
            render json: {status: 404, message: "証明書の送信に失敗しました。最初からやり直してください。"}
       end
    end

    def verification_params
        params.permit(:user_id, :check_age, :image)
    end
=======
        myId = params[:id]

        @deleteCertificateImage = CheckAge.where(user_id: myId).destroy_all

        @verification = CheckAge.new(verification_params) 

        if @verification.save
            render json: {status: 200, message: "証明書の登録に成功しました。"}
        else
            render json: {status: 404, message: "証明書の登録に失敗しました。最初からやり直してください。"}
        end
    end

    def sendMail
        myId = params[:stringMyId]
        name = params[:name]
        email = params[:email]
        message = params[:message]
        image = params[:image]

        if image.present?
            uploaded_file = image
            
            File.open(Rails.root.join('public', 'uploads', uploaded_file.original_filename), 'wb') do |file|
                file.write(uploaded_file.read)
            end

            image_url = "http://localhost:3001/uploads/check_age/image/#{myId}/#{uploaded_file.original_filename}"
            ContactMailer.contact_email(name, email, message, image_url).deliver_now

            render json: {status: 200, message: "証明書を管理者に送信しました。"}
        else
            render json: {status: 404, message: "証明書の管理者への送信に失敗しました。最初からやり直してください。"}
        end

    end

    private

    def verification_params
        params.permit(:user_id, :check_age, :image)
    end

>>>>>>> b21bfa0 (add actionMailer, passwoedReset)
end
