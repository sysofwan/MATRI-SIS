module Api
  # Controller for managing users and sessions
  class UsersController < ApplicationController
    before_action :set_user, only: [:show, :update, :destroy]

    def index
      render json: User.all
    end

    def show
      render json: @user
    end

    def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @user.destroy
      head :no_content
    end

    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    private

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end

    def set_user
      @user = params[:id] == 'me' ? current_user : User.find(params[:id])
    end
  end
end
