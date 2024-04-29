module Api
  class HomeController < ApiController
    def index
      render json: { message: 'Habit Kicker Api' }, status: :ok
    end
  end
end