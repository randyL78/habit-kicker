class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  def display_name
    "#{first_name} #{last_name}"
  end

  def serializable_hash(options = nil)
    {
      id:,
      first_name:,
      last_name:,
      email:,
      display_name:
    }
  end
end
