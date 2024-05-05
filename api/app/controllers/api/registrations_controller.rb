module Api
  class RegistrationsController < Devise::RegistrationsController
    include RackSessionsFix

    respond_to :json

    private

    def respond_with(_current_user, _opts = {})
      if resource.persisted?
        return render json: { status: :success, data: resource, message: 'User signed up successfully' },
                      status: :created
      end

      render json: { status: :error, message: 'Unable to create user', errors: resource.errors },
             status: :unprocessable_entity
    end
  end
end
