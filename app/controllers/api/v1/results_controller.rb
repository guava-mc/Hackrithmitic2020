class Api::V1::ResultsController < ApplicationController
  def index
    results = Result.all.order(score: :desc)
    render json: results
  end

  def create
    result = Result.create!(result_params)
    if result
      render json: result
    else
      render json: result.errors
    end
  end

  def show
    if result
      render json: result
    else
      render json: result.errors
    end
  end

  def destroy
    result&.destroy
    render json: { message: 'Result deleted' }
  end

  private

  def result_params
    params.permit(:name, :score)
  end

  def result
    @result ||= Result.find(params[:id])
  end
end
