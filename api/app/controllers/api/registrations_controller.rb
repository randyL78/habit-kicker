module Api
  class RegistrationsController < Devise::RegistrationsController
    include RackSessionsFix

    respond_to :json

    private
    def respond_with(_current_user, _opts = {})
      return render json: { status: :success, data: resource, message: 'User signed up successfully'}, status: :created if resource.persisted?

      render json: { status: :error, message: 'Unable to create user',errors: resource.errors }, status: :unprocessable_entity
    end
  end
end
