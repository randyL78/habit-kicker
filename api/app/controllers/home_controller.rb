class HomeController < ApplicationController
  def index
    render json: { message: 'This is the root Habit Kicker API server. If you are looking for the API endpoints, please prefix all requests with `/api`' },
           status: :ok
  end
end
