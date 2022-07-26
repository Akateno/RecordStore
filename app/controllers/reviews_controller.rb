class ReviewsController < ApplicationController
    def index 
        render json: Review.all
    end 

    def show 
        record = find_review
        render json: record 
    end 

    def update
        review=find_review
        review.update!(review_params)
        render json:review, status: :accepted 

    end 

    private
    def find_review
        Review.find(params[:id])
    end 
    
    def review_params
        params.permit(:comment, :date, :score)
    end 
end
