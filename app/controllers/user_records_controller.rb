class UserRecordsController < ApplicationController
    def index 
        render json: UserRecord.all 
    end
    
    def create 
        record=current_user.user_records.create!(record_params)
        render json: record, status: :created
    end 

    def destroy 
        record=find_record
        record.destroy 
        head :no_content 
    end 

    def update 
        record=find_record
        record.update!(record_params)
        render json: record, status: :accepted
    end 

    private
     def current_user
         User.find_by(id: session[:user_id])
     end 

    def record_params
        params.permit(:name, :artist, :image, :release_date)
    end 

    def find_record
        UserRecord.find(params[:id]) 
    end
end
