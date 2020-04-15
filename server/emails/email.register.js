const { config } = require("../utils/config");
const { emails } = require("../services/constants");

module.exports.registerEmail = (userEmail, userName) => {
    return {
        to: userEmail,
        from: config.emailSender,
        subject: emails.accountCreated,
        html: `
            <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
        <div class="Unsubscribe--addressLine">
          <p class="Unsubscribe--senderName"
            style="font-size:12px;line-height:20px"
          >
          <a href="${config.baseUrl}" target="_blank" style="font-family:sans-serif;text-decoration:none;">
            Contact.me team
          </a>
            
          </p>
          <p style="font-size:12px;line-height:20px">
            <span class="Unsubscribe--senderAddress">Yerkatgits station</span>, <span class="Unsubscribe--senderCity">Yerevan</span>, <span class="Unsubscribe--senderState">Erebuni</span> <span class="Unsubscribe--senderZip">0005</span>
          </p>
        </div>
        <div>
            <h1>${emails.accountCreated}</h1>
            <p style="font-size:16px;line-height:20px"><strong>Thank you ${userName}, for joining Contact.me team! </strong></p>
            <p style="font-size:12px;line-height:20px">
                <strong>Contact.me</strong> is a global freelancing platform and social networking where businesses <br> and independent professionals connect and collaborate remotely.
            </p>
            <p>You register your account with <b>${userEmail}</b></p>
            <img src="https://res.cloudinary.com/do4elvogx/image/upload/v1586446593/defaultImages/defaultcontact_tegpsp.jpg" alt="Contact me" style="width:250px; height: auto; margin: 0 auto;"/>
        </div>
        <p style="font-size:12px; line-height:20px;">
          <a class="Unsubscribe--unsubscribeLink" href="${config.baseUrl}" target="_blank" style="font-family:sans-serif;text-decoration:none;">
            Unsubscribe
          </a>
<!--          - -->
<!--          <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe&#45;&#45;unsubscribePreferences" style="font-family:sans-serif;text-decoration:none;">-->
<!--            Unsubscribe Preferences-->
<!--          </a>-->
        </p>
      </div>
      `,
    };
};
