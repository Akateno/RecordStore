class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :not_found 
    rescue_from ActiveRecord::RecordInvalid, with: :invalid 



    def not_found(error)
        render json: {errors: error.message}, status: :not_found
    end 

    def invalid(error)
        render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
    end 

end
