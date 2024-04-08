module Api
  class HomeController < ApplicationController
    def index
      render json: { message: 'Habit Kicker Api' }, status: :ok
    end
  end
end