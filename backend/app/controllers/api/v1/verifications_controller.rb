class Api::V1::VerificationsController < ApplicationController
    def create
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
end
