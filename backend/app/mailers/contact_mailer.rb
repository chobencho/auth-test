
class ContactMailer < ApplicationMailer
  def contact_email(id, email, image)
    @id = id
    @email = email
    @image = image

    mail(to: 'y-nakatani@tanesho.co.jp', subject: 'お問い合わせフォームからのメッセージ')
  end
end
