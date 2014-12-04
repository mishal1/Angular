require 'sinatra/base'
require 'bundler/setup'

class GithubReport<Sinatra::Base

	get '/' do

		send_file 'index.html'
	end

end