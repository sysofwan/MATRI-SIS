class User < ActiveRecord::Base
	VALID_EMAIL_REGEX = /\A[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+\z/
	
	validates :email, presence: true, uniqueness: true, format: {with: VALID_EMAIL_REGEX}
	validates :password, length: { minimum: 6 }

	has_secure_password
end
