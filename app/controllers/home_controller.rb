class HomeController < ApplicationController
  def index
  end

  def fetch
    @plan = Plan.find(params[:id])
    @drawing = JSON.parse(@plan.drawing)
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @drawing }
    end
  end

  def save 
  	@plan = Plan.new()
  	#debugger
  	@plan.drawing=params[:json];
  	@plan.save
  end

end
