class Api::CurrentUserController < Api::ApiController
  before_action :authenticate_user!, only: %i[index]
  def index
    render json: { current_user:, status: 'success' }, status: :ok
  end
end
