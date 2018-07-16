using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Contact : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button4_Click(object sender, EventArgs e)
    {
        String strconn = "Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True";
        SqlConnection conn = new SqlConnection(strconn);
        SqlCommand cmd = new SqlCommand();
        conn.Open();
        cmd.Connection = conn;
        String aa =TextBox1.Text;
        String bb = TextBox2.Text;
        String cc = TextBox3.Text;
        String dd = TextBox4.Text;
        String ee = TextBox5.Text;
        String ff = TextBox6.Text;
        
        cmd = new SqlCommand("Insert into query(Name,Phone,Email,City,Address,Query)values('" + aa + "','" + bb + "','" + cc + "','" + dd + "','" + ee + "','" + ff + "')", conn);

        cmd.CommandType = CommandType.Text;


        cmd.ExecuteNonQuery();
        conn.Close();
        Literal1.Text = "Submitted your Query";
    }
    protected void Button5_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        
    }
}