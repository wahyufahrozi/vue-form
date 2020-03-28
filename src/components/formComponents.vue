<template>
  <div class="container" id="forms">
    <form @submit.prevent="save">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h3>FORM</h3>
          <hr />
          <div class="form-group">
            <label for="username">
              Username
              <span style="color:red">*</span>
            </label>
            <input
              type="text"
              id="username"
              class="form-control"
              v-model="userData.username"
            />
            <div class="error">{{ errors.username }}</div>
          </div>
          <div class="form-group">
            <label for="password">
              Password
              <span style="color:red">*</span>
            </label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="userData.password"
            />
            <div class="error">{{ errors.password }}</div>
          </div>
          <div class="form-group">
            <label for="email">
              Email
              <span style="color:red">*</span>
            </label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email"
            />
          </div>
          <div class="error">{{ errors.email }}</div>

          <div class="row">
            <div class="col-xs-12 col-md-12 form-group">
              <label for="gender">Gender</label>
              <select
                id="gender"
                class="form-control"
                v-model="userData.selectedGender"
              >
                <option
                  v-for="gender in userData.genders"
                  v-bind:key="gender"
                  >{{ gender }}</option
                >
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-md-12 form-group">
              <label for="dateofbirth">Date Of Birth</label><br />

              <a-row>
                <a-col :span="24">
                  <a-date-picker
                    @change="onChange"
                    v-model="userData.date"
                    name='"date-1558421606243"'
                /></a-col>
              </a-row>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-md-6 form-group">
              <label for="gender">Marital Status</label>
              <br />
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio-group-1558421657915"
                  id="single"
                  value="single"
                  v-model="userData.marital"
                />
                <label class="form-check-label" for="single">Single</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio-group-1558421657915"
                  id="married"
                  value="married"
                  v-model="userData.marital"
                />
                <label class="form-check-label" for="married">Married</label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio-group-1558421657915"
                  id="widowed"
                  value="widowed"
                  v-model="userData.marital"
                />
                <label class="form-check-label" for="widowed">Widowed</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio-group-1558421657915"
                  id="divorced"
                  value="divorced"
                  v-model="userData.marital"
                />
                <label class="form-check-label" for="divorced">Divorced</label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label>
          <br />
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="userData.message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="userData.sendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="userData.sendMail"
              />
              Send Infomail
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-success" name="button-1558421848040">
            Save
          </button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="userData.isSaved">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Username:{{ userData.username }}</p>
            <p>Email:{{ userData.email }}</p>
            <p>Password:{{ userData.password }}</p>
            <p>Marital Status:{{ userData.marital }}</p>
            <p>Age:{{ userData.age }}</p>
            <p>Date Of Birth:{{ userData.date }}</p>
            <p style="white-space:pre">Message:{{ userData.message }}</p>
            <p>
              <strong>Send Mail?</strong>
            </p>
            <ul>
              <li v-for="item in userData.sendMail" v-bind:key="item">
                {{ item }}
              </li>
            </ul>
            <p>Gender:{{ userData.selectedGender }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "formComponents",

  data() {
    return {
      userData: {
        username: "",
        email: "",
        password: "",
        age: "",
        message: "",
        sendMail: [],
        marital: "married",
        genders: ["Male", "Female"],
        selectedGender: "Male",
        date: new Date(),
        isSaved: false
      },
      valid: true,
      success: false,

      errors: {
        username: null,
        password: null,
        email: null
      },
      msg: null
    };
  },
  methods: {
    validUsername() {
      if (!this.userData.username) {
        this.errors.username = "Username Is required";
        return false;
      }
      this.errors.username = null;
      return true;
    },
    validPassword() {
      if (!this.userData.password) {
        this.errors.password = "Password Is required";
        return false;
      }
      if (this.userData.password.length < 4) {
        this.errors.password = "password is to short";
        return false;
      }
      this.errors.password = null;
      return true;
    },
    validEmail() {
      const regex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
      const matches = regex.test(this.userData.email.toLowerCase());
      if (!this.userData.email) {
        this.errors.email = "Email Is required";
        return false;
      }
      if (!matches) {
        this.errors.email = "please enter a valid email";
        return false;
      }

      this.errors.email = null;
      return true;
    },
    save() {
      const data = {
        userData: this.userData
      };
      this.validUsername();
      this.validPassword();
      this.validEmail();
      if (this.errors.username || this.errors.password || this.errors.email) {
        return false;
      }
      this.userData.isSaved = true;
      alert(JSON.stringify(data, null, 2));
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
