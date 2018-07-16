using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

public partial class Admin : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        SqlConnection con = new SqlConnection("Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
       con.Open();
       SqlCommand cmd = new SqlCommand("Select Username, Password from Admin where username='" + TextBox2.Text + "' and password ='" + TextBox3.Text + "'", con);
       SqlDataAdapter da = new SqlDataAdapter(cmd);
       DataTable dt = new DataTable();
       da.Fill(dt);
       if (dt.Rows.Count > 0)
       {
           Response.Redirect("Management.aspx");
       }
       else
       {
           Response.Write("<script>alert('Please enter valid Username and Password')</script>");
       }
    }
  
    protected void Button4_Click(object sender, EventArgs e)
    {
        Response.Redirect("Home.aspx");
    }
}
