class HomeController < ApplicationController
  def index
    @data = [{ rank: 1, name: 'Tom', score: 100 }, { field1: 1, name: 'Tom', score: 100 }]
  end
end
