module Api
  # Controller for managing users and sessions
  class UsersController < ApplicationController
    def show
      @user = User.find(params[:id])
      render_user
    end

    def create
      @user = User.new(user_params)
      if @user.save
        render_user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end

    def user_params
      params.permit(:email, :password, :password_confirmation)
    end

    def render_user
      render json: @user, except: [:password_digest, :created_at, :updated_at]
    end
  end
end
