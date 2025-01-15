export default class Token {
  private token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRlZXoiLCJpYXQiOjE1MTYyMzkwMjJ9.eBka2U1mqGQBl2lJDl0bGwDNYJJX4tifs0lW-UtPoJ8";

  getToken(): string {
    return this.token;
  }
}
