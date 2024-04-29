require 'rails_helper'

describe 'User Authentication', type: :request do
  attr_reader :path, :headers, :params

  before(:each) do
    @path = '/users'
    @headers = { 'ACCEPT': 'application/json' }
  end

  describe 'Create a user' do
    before(:each) do
      @params = {
        user: {
          first_name: 'John',
          last_name: 'Smith',
          email: 'john@smith.com',
          password: 'password'
        }
      }
    end

    it 'returns an "OK" status code' do
      post '/users', params: params, headers: headers

      expect(response).to have_http_status :ok
    end
  end

  it 'tells the truth' do
    expect(true).to be true
  end
end
