class Api::SessionsController < Devise::SessionsController
  include RackSessionsFix

  respond_to :json

  private

  def respond_with(current_user, _opts = {})
    render json: { data: { user: current_user.as_json(only: %i[id first_name last_name email]) },
                   status: 'success',
                   message: 'Logged in successfully' },
           status: :ok
  end
end