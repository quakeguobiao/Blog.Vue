import { UserManager } from 'oidc-client'

class ApplicationUserManager extends UserManager {
  constructor () {
    super({
      //authority: 'https://ids.neters.club',
      authority: 'http://ids.banlantech.com',
      client_id: 'blogvuejs',
        /*redirect_uri: 'http://vueblog.neters.club/callback',*/
        redirect_uri: 'http://testbusiness.banlantech.com/callback',
      response_type: 'id_token token',
      scope: 'openid profile roles blog.core.api.BlogModule',
        //post_logout_redirect_uri: 'http://vueblog.neters.club'
        post_logout_redirect_uri: 'http://testbusiness.banlantech.com'
    })
  }

  async login () {
    await this.signinRedirect()
    return this.getUser()
  }

  async logout () {
    return this.signoutRedirect()
  }
}

const applicationUserManager = new ApplicationUserManager()
export { applicationUserManager as default }
