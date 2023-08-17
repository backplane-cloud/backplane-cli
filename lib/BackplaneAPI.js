const axios = require("axios");
const colors = require("colors");
const TokenManager = require("../lib/TokenManager");

class BackplaneAPI {
  constructor() {
    //this.token = token;
    const tokenManager = new TokenManager();
    this.token = tokenManager.getToken();
    this.data = {
      headers: {
        Authorization: "Bearer " + this.token,
      },
    };
    this.baseUrl = "http://localhost:8000/api";
  }

  async login(email, password) {
    try {
      const res = await axios.post(`${this.baseUrl}/users/login`, {
        email,
        password,
      });
      console.log(res.data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async logout(email, password) {
    try {
      const res = await axios.post(`${this.baseUrl}/users/logout`, {
        email,
        password,
      });

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async me() {
    try {
      const res = await axios.get(`${this.baseUrl}/users/me`, this.data);
      console.log(res.data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // ORGS
  async getOrgs(stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/orgs`, this.data);
      //console.log(`${res.data.length} Organisation/s found: `.yellow);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getOrg(id, stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/orgs/${id}`, this.data);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getOrgRequest(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/orgs/${id}/requests`,
        this.data
      );
      //console.log(`${res.data.length} App/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteOrg(id) {
    try {
      const res = await axios.delete(`${this.baseUrl}/orgs/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addOrg(displayname, license, owner, budget, currency) {
    try {
      // Dummy Data for CSP for now
      let csp = [
        { provider: "aws", secret: "123" },
        { provider: "azure", secret: "123" },
      ];

      let orgObj = {
        name: displayname,
        license,
        owner,
        csp,
        budget,
        currency,
      };

      // console.log(orgObj, "Org successfully created");

      const res = await axios.post(`${this.baseUrl}/orgs`, orgObj, this.data);
      console.log(res.data);
      //return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateOrg(id, code, displayname, license, owner, status, budget) {
    try {
      let orgObj = {
        code,
        name: displayname,
        license,
        owner,
        status,
        budget,
      };

      const res = await axios.put(
        `${this.baseUrl}/orgs/${id}`,
        orgObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // PLATFORMS
  async getPlatforms(stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/platforms`, this.data);
      //console.log(`${res.data.length} Platform/s found: `.yellow);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPlatform(id, stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/platforms/${id}`, this.data);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async deletePlatform(id) {
    try {
      const res = await axios.delete(
        `${this.baseUrl}/platforms/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addPlatform(code, displayname, orgId, ownerId) {
    try {
      let platformObj = {
        code,
        name: displayname,
        orgId,
        ownerId,
      };

      const res = await axios.post(
        `${this.baseUrl}/platforms`,
        platformObj,
        this.data
      );

      console.log(res.data, "Platform successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updatePlatform(id, code, displayname, orgId, ownerId, status, budget) {
    try {
      let platformObj = {
        code,
        name: displayname,
        orgId,
        ownerId,
        status,
        budget,
      };

      const res = await axios.put(
        `${this.baseUrl}/platforms/${id}`,
        platformObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getPlatformRequest(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/platforms/${id}/requests`,
        this.data
      );
      //console.log(`${res.data.length} App/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // PRODUCTS
  async getProducts(all, stringify) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/products?filter=${all ? "true" : "false"}`,
        this.data
      );
      //console.log(`${res.data.length} Product/s found: `.yellow);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getProduct(id, stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/products/${id}`, this.data);

      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteProduct(id) {
    try {
      const res = await axios.delete(
        `${this.baseUrl}/products/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addProduct(name, description, platformId, ownerId, orgId) {
    try {
      let productObj = {
        name,
        description,
        platformId,
        ownerId,
        orgId,
      };

      const res = await axios.post(
        `${this.baseUrl}/products`,
        productObj,
        this.data
      );

      //console.log(productObj, "Product successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateProduct(
    id,
    code,
    displayname,
    description,
    platformId,
    ownerId,
    status,
    orgId,
    budget
  ) {
    try {
      let productObj = {
        code,
        name: displayname,
        description,
        platformId,
        ownerId,
        status,
        budget,
      };

      const res = await axios.put(
        `${this.baseUrl}/products/${id}`,
        productObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getProductRequest(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/products/${id}/requests`,
        this.data
      );
      //console.log(`${res.data.length} App/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // APPS
  async getApps(stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/apps`, this.data);
      //console.log(`${res.data.length} App/s found: `.yellow);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getAppRequest(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/apps/${id}/requests`,
        this.data
      );
      //console.log(`${res.data.length} App/s found: `.yellow);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getApp(id, stringify) {
    try {
      const res = await axios.get(`${this.baseUrl}/apps/${id}`, this.data);
      let data;
      stringify ? (data = JSON.stringify(res.data)) : (data = res.data);
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async getAppBilling(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/apps/${id}/billing`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteApp(id) {
    try {
      const res = await axios.delete(`${this.baseUrl}/apps/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addApp(code, displayname, orgId, ownerId, cloud) {
    try {
      let appObj = {
        code,
        name: displayname,
        orgId,
        ownerId,
        cloud,
      };

      const res = await axios.post(`${this.baseUrl}/apps`, appObj, this.data);

      console.log(res.data);
      console.log(`App successfully created in ${cloud}`.yellow);
      //return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateApp(
    id,
    code,
    displayname,
    orgId,
    productId,
    ownerId,
    cloud,
    status,
    budget
  ) {
    try {
      let appObj = {
        code,
        name: displayname,
        orgId,
        productId,
        ownerId,
        cloud,
        status,
        budget,
      };

      const res = await axios.put(
        `${this.baseUrl}/apps/${id}`,
        appObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // USERS
  async getUsers() {
    try {
      const res = await axios.get(`${this.baseUrl}/users`, this.data);
      console.log(`${res.data.length} User/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getUser(id) {
    try {
      const res = await axios.get(`${this.baseUrl}/users/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUser(id) {
    try {
      const res = await axios.delete(`${this.baseUrl}/users/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addUser(displayname, email, password, userType) {
    try {
      let userObj = {
        name: displayname,
        email,
        password,
        userType,
      };

      const res = await axios.post(
        `${this.baseUrl}/users/create`,
        userObj,
        this.data
      );

      console.log(userObj, "User successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async registerUser(displayname, email, password, userType, orgName) {
    try {
      let userObj = {
        name: displayname,
        email,
        password,
        userType,
        orgName,
      };

      const res = await axios.post(`${this.baseUrl}/users`, userObj, this.data);

      console.log(userObj, "User successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateUser(id, displayname, orgId, email, password, userType) {
    try {
      let userObj = {
        name: displayname,
        orgId,
        email,
        password,
        userType,
      };

      const res = await axios.put(
        `${this.baseUrl}/users/${id}`,
        userObj,
        this.data
      );
      console.log(res.data);
      console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // REQUESTS
  async getRequests(all) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/requests?filter=${all ? "true" : "false"}`,
        this.data
      );
      //console.log(`${res.data.length} Request/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getRequest(id) {
    try {
      const res = await axios.get(`${this.baseUrl}/requests/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getMyRequests() {
    try {
      const res = await axios.get(`${this.baseUrl}/requests/me`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async approveRequest(id, code) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/requests/${id}/approve?code=${code}`
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteRequest(id) {
    try {
      const res = await axios.delete(
        `${this.baseUrl}/requests/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addRequest(requestType, requestedForType, requestedForId, data) {
    try {
      let requestObj = {
        requestType,
        requestedForType,
        requestedForId,
        data,
      };

      const res = await axios.post(
        `${this.baseUrl}/requests`,
        requestObj,
        this.data
      );

      //console.log(requestObj, "Request successfully created");
      //console.log(res);
      console.log(res.data);
      //return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateRequest(
    id,
    requestType,
    approvalStatus,
    approvalCode,
    approver,
    requestedBy,
    requestedForType,
    requestedForId
  ) {
    try {
      let requestObj = {
        requestType,
        approvalStatus,
        approvalCode,
        approver,
        requestedBy,
        requestedForType,
        requestedForId,
      };

      const res = await axios.put(
        `${this.baseUrl}/requests/${id}`,
        requestObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // SERVICES
  async getServices(all) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/services?filter=${all ? "true" : "false"}`,
        this.data
      );
      //console.log(`${res.data.length} Service/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getService(id) {
    try {
      const res = await axios.get(`${this.baseUrl}/services/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteService(id) {
    try {
      const res = await axios.delete(
        `${this.baseUrl}/services/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addService(
    code,
    displayname,
    description,
    url,
    apikey,
    orgId,
    ownerId
  ) {
    try {
      let serviceObj = {
        code,
        name: displayname,
        description,
        url,
        apikey,
        orgId,
        ownerId,
      };

      const res = await axios.post(
        `${this.baseUrl}/services`,
        serviceObj,
        this.data
      );

      console.log(serviceObj, "Service successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateService(
    id,
    code,
    displayname,
    description,
    url,
    apikey,
    orgId,
    ownerId
  ) {
    try {
      let serviceObj = {
        code,
        name: displayname,
        description,
        url,
        apikey,
        orgId,
        ownerId,
      };

      const res = await axios.put(
        `${this.baseUrl}/services/${id}`,
        serviceObj,
        this.data
      );
      console.log(res.data);
      console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // TEAMS
  async getTeams() {
    try {
      //const res = await axios.get(`${this.baseUrl}/teams?token=${token}`);

      // // Authing with Header
      // let data = {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // };
      // console.log("DATA", this.data);
      const res = await axios.get(`${this.baseUrl}/teams`, this.data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getTeam(id) {
    try {
      const res = await axios.get(`${this.baseUrl}/teams/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async isMember(id, userid) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/teams/${id}/members/${userid}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async listMembers(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/teams/${id}/members`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addMembers(id, members) {
    try {
      const res = await axios.patch(
        `${this.baseUrl}/teams/${id}/members`,
        { members },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async removeMembers(id, members) {
    try {
      const res = await axios.patch(
        `${this.baseUrl}/teams/${id}/members/remove`,
        { members },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async listOwners(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/teams/${id}/owners`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addOwners(id, owners) {
    try {
      const res = await axios.patch(
        `${this.baseUrl}/teams/${id}/owners`,
        { owners },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async removeOwners(id, owners) {
    try {
      const res = await axios.patch(
        `${this.baseUrl}/teams/${id}/owners/remove`,
        { owners },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteTeam(id) {
    try {
      const res = await axios.delete(`${this.baseUrl}/teams/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addTeam(name, code, owner, scope) {
    try {
      let teamObj = {
        name,
        code,
        owner,
        scope,
      };

      const res = await axios.post(`${this.baseUrl}/teams`, teamObj, this.data);

      console.log(teamObj, "Team successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateTeam(id, name, code, owners, scope, orgId) {
    try {
      let teamObj = {
        name,
        code,
        owners,
        scope,
        orgId,
      };

      const res = await axios.put(
        `${this.baseUrl}/teams/${id}`,
        teamObj,
        this.data
      );
      console.log(res.data);
      console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // ROLES
  async getRoles() {
    try {
      //const res = await axios.get(`${this.baseUrl}/roles?token=${token}`);

      // // Authing with Header
      // let data = {
      //   headers: {
      //     Authorization: "Bearer " + token,
      //   },
      // };
      // console.log("DATA", this.data);
      const res = await axios.get(`${this.baseUrl}/roles`, this.data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getRole(id) {
    try {
      const res = await axios.get(`${this.baseUrl}/roles/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async listActions(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/roles/${id}/actions`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addActions(id, allowActions) {
    try {
      const res = await axios.put(
        `${this.baseUrl}/roles/${id}/actions`,
        { allowActions },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async removeActions(id, allowActions) {
    try {
      const res = await axios.patch(
        `${this.baseUrl}/roles/${id}/actions`,
        { allowActions },
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteRole(id) {
    try {
      const res = await axios.delete(`${this.baseUrl}/roles/${id}`, this.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addRole(name, type, allowActions, orgId) {
    try {
      let roleObj = {
        name,
        type,
        allowActions,
        orgId,
      };

      const res = await axios.post(`${this.baseUrl}/roles`, roleObj, this.data);

      console.log(roleObj, "Role successfully created");

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateRole(id, name, code, owners, scope, allowActions) {
    try {
      let roleObj = {
        name,
        code,
        owners,
        scope,
        allowActions,
      };

      const res = await axios.put(
        `${this.baseUrl}/roles/${id}`,
        roleObj,
        this.data
      );
      console.log(res.data);
      console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  // ASSIGNMENTS
  async getAssignments(all) {
    try {
      const res = await axios.get(`${this.baseUrl}/assignments`, this.data);
      //console.log(`${res.data.length} Assignment/s found: `.yellow);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async getAssignment(id) {
    try {
      const res = await axios.get(
        `${this.baseUrl}/assignments/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteAssignment(id) {
    try {
      const res = await axios.delete(
        `${this.baseUrl}/assignments/${id}`,
        this.data
      );
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async addAssignment(type, principal, scope, role) {
    try {
      let assignmentObj = {
        type,
        principal,
        scope,
        role,
        principalRef: type[0].toUpperCase() + type.substring(1, type.length),
      };

      // console.log(assignmentObj);
      // return;

      const res = await axios.post(
        `${this.baseUrl}/assignments`,
        assignmentObj,
        this.data
      );

      console.log(res.data);

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  async updateAssignment(id, type, principal, scope, role, expires, orgId) {
    try {
      let assignmentObj = {
        type,
        principal,
        scope,
        role,
        expires,
        orgId,
      };

      const res = await axios.put(
        `${this.baseUrl}/assignments/${id}`,
        assignmentObj,
        this.data
      );
      console.log(res.data);
      //console.log("Updated successfully".green);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = BackplaneAPI;
