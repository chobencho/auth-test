
class ContactMailer < ApplicationMailer
  def contact_email(name, email, message, image)
    @name = name
    @email = email
    @message = message
    @image = image

    mail(to: 'y-nakatani@tanesho.co.jp', subject: 'お問い合わせフォームからのメッセージ')
  end
end
