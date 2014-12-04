require 'sinatra/base'
require 'bundler/setup'

class GithubReport<Sinatra::Base

	set :public_folder, Proc.new { File.join(root, "..", "public")}

	get '/' do
		erb :index
	end

end