using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Registration : System.Web.UI.Page
{
   /// String strconn = "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True";
    SqlConnection conn = new SqlConnection( "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
    SqlCommand cmd = new SqlCommand();
    SqlDataReader sqldr;
    string g;int i;
    protected void Page_Load(object sender, EventArgs e)
    {
        if (conn.State == ConnectionState.Open)
            conn.Close();
        conn.Open();
        cmd = conn.CreateCommand();
        cmd.CommandText = "select max(uid) from Registeration";
        sqldr =cmd.ExecuteReader();

        if (sqldr.Read())
        {
           // g = sqldr.GetString(0);
            i = sqldr.GetInt32(0);
        }
       // txtuid.Text = Convert.ToString(1 + Convert.ToInt32(g));
        txtuid.Text = Convert.ToString(1 + i);

        conn.Close();
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        //String strconn = "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True";
        //SqlConnection conn = new SqlConnection(strconn);
        //SqlCommand cmd = new SqlCommand();
        cmd.Connection = conn;
        String strQuery = "Insert into Registeration(uid,Name,Age,DateOfBirth,Address,Username,Password,Email,Contact)values(@uid,@Name,@Age,@DateOfBirth,@Address,@Username,@Password,@Email,@Contact)";
        cmd.CommandText = strQuery;
        cmd.CommandType = CommandType.Text;
        cmd.Parameters.AddWithValue("@uid", txtuid.Text);
        cmd.Parameters.AddWithValue("@Name",TextBox1.Text);
        cmd.Parameters.AddWithValue("@Age",TextBox2.Text);
        cmd.Parameters.AddWithValue("@DateOfBirth",TextBox8.Text);
        cmd.Parameters.AddWithValue("@Address", TextBox3.Text);
        cmd.Parameters.AddWithValue("@Username", TextBox4.Text);
        cmd.Parameters.AddWithValue("@Password", TextBox5.Text);
        cmd.Parameters.AddWithValue("@Email", TextBox9.Text);
        cmd.Parameters.AddWithValue("@Contact", TextBox7.Text);
        conn.Open();
       cmd.ExecuteNonQuery();
        conn.Close();
        Literal1.Text = "Thankyou for register";
    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        txtuid.Text = "";
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox7.Text = "";
        TextBox8.Text = "";
        TextBox9.Text = "";
        
    }
}