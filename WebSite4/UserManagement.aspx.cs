using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class UserManagement : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
       
    }
    protected void Button5_Click(object sender, EventArgs e)
    {
          SqlConnection conn = new SqlConnection("Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
         SqlCommand cmd = new SqlCommand();
        cmd = conn.CreateCommand();
        if (conn.State == ConnectionState.Open)
            conn.Close();
        conn.Open();

        SqlDataAdapter adp;
        DataSet ds;
        DataRow dr;
        DataTable dt;
        adp = new SqlDataAdapter("select * from management", conn);
        ds = new DataSet();
        adp.Fill(ds, "temp");
        dt = ds.Tables["temp"];
        dt.PrimaryKey = new DataColumn[] { dt.Columns["username"] };

        string bb = TextBox2.Text;
        dr = dt.Rows.Find(bb);
        if (dr != null)
        {
            TextBox1.Text = dr[0].ToString();
            TextBox2.Text = dr[1].ToString();
            TextBox3.Text = dr[2].ToString();
            TextBox4.Text = dr[3].ToString();
            TextBox5.Text = dr[4].ToString();
            TextBox6.Text = dr[5].ToString();
            TextBox7.Text = dr[6].ToString();
            TextBox8.Text = dr[7].ToString();
            TextBox9.Text = dr[8].ToString();
            TextBox10.Text = dr[9].ToString();
            TextBox11.Text = dr[10].ToString();
            TextBox12.Text = dr[11].ToString();
            TextBox13.Text = dr[12].ToString();

        }
        else
        {
            Literal1.Text = "Not Found";
        }
    }
    protected void Button6_Click(object sender, EventArgs e)
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        TextBox7.Text = "";
        TextBox8.Text = "";
        TextBox9.Text = "";
        TextBox10.Text = "";
        TextBox11.Text = "";
        TextBox12.Text = "";
        TextBox13.Text = "";
   
    }
}