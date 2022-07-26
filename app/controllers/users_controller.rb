class UsersController < ApplicationController
    before_action :authorize, only: [:show, :update]

    def create
        user = User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
    end 

    def show 
        user=User.find_by(id: session[:user_id])
        render  json:user
    end 
    def update 
        user=User.find_by(id: session[:user_id])
        user.update!(pic_param)
        render json:user, status: :accepted
    end 

    private
    def pic_param
        params.permit(:image_url, :id, :user)
    end 
    def user_params
        params.permit(:username, :password, :password_conformation, :image_url)
    end 

    def authorize
        return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :user_id 
    end 

end
