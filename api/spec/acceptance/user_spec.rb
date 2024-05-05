require 'rails_helper'
require 'devise/jwt/test_helpers'

describe 'Users', type: :request do
  attr_reader :path, :headers

  before(:each) do
    @user = FactoryBot.create(:user)

    @path = '/api/current_user'
    @headers = { ACCEPT: 'application/json' }
    @auth_headers = Devise::JWT::TestHelpers.auth_headers(@headers, @user)
  end

  describe 'Get current user details' do
    it 'returns an "ok" status' do
      get(path, headers: @auth_headers)

      expect(response).to have_http_status(:ok)
    end

    it 'requires a signed in user' do
      get(path, headers:)

      expect(response).to have_http_status :unauthorized
    end

    it 'returns a "success" status' do
      get(path, headers: @auth_headers)

      data = JSON.parse(response.body)

      expect(data).to include('status' => 'success')
    end

    it 'returns the "current_user" data' do
      get(path, headers: @auth_headers)

      data = JSON.parse(response.body)

      expect(data).to include('current_user')
    end

    it 'returns the id, email, first_name, last_name, and display_name of the current user' do
      get(path, headers: @auth_headers)

      current_user = JSON.parse(response.body)['current_user']

      expect(current_user).to include(
        'id' => @user.id,
        'first_name' => @user.first_name,
        'last_name' => @user.last_name,
        'email' => @user.email,
        'display_name' => @user.display_name
      )
    end

    it 'does not return the timestamps, password' do
      get(path, headers: @auth_headers)

      current_user = JSON.parse(response.body)['current_user']

      expect(current_user).to_not include('created_at', 'updated_at', 'password')
    end

    it 'returns the correct user data' do
      new_user = FactoryBot.create(:user)
      new_user_auth_headers = Devise::JWT::TestHelpers.auth_headers(headers, new_user)


      get(path, headers: new_user_auth_headers)

      current_user = JSON.parse(response.body)['current_user']

      expect(current_user).to include(
        'id' => new_user.id,
        'first_name' => new_user.first_name
      )
    end

    context 'with expired signature' do
      before(:each) do
        Timecop.travel(121.minutes.from_now)
      end

      it 'returns an "unauthorized" status' do
        get(path, headers: @auth_headers)

        expect(response).to have_http_status :unauthorized
      end
    end
  end
end
