using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class Fresher : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        String aa = TextBox1.Text;
        String bb = TextBox2.Text;
        String cc = TextBox3.Text;
        String dd = TextBox4.Text;
        String ee = TextBox5.Text;
        String ff = TextBox6.Text;
        String gg = String.Empty;
        if (RadioButton1.Checked)
        {
            gg = "Yes";
        }
        else if (RadioButton2.Checked)
        {
            gg = "No";
        }
        String hh = String.Empty;
        if (RadioButton10.Checked)
        {
            hh = "Friends";
        }
        else if (RadioButton11.Checked)
        {
            hh = "Relatives";
        }
        else if (RadioButton12.Checked)
        {
            hh = "Media";
        }
        else if (RadioButton13.Checked)
        {
            hh = "Others";
        }
        String ii = String.Empty;
        if (RadioButton5.Checked)
        {
            ii = "1";
        }
        else if (RadioButton6.Checked)
        {
            ii = "2";
        }
        else if (RadioButton7.Checked)
        {
            ii = "3";
        }
        else if (RadioButton8.Checked)
        {
            ii = "4";
        }
        else if (RadioButton9.Checked)
        {
            ii = "5";
        }
        String jj = TextBox7.Text;


        String strconn = (@"Data Source=DHANANJAY;Initial Catalog=ISP;Integrated Security=True");
        SqlConnection conn = new SqlConnection(strconn);
        SqlCommand cmd = new SqlCommand();
        conn.Open();
        cmd.Connection = conn;
        String strQuery = "Insert into feedbackf values(@Name,@Address,@City,@State,@Phone,@Email,@Connections,@Prefer,@Ratings,@Comments)";
        cmd.CommandText = strQuery;
        cmd.CommandType = CommandType.Text;
        cmd.Parameters.AddWithValue("@Name", aa);
        cmd.Parameters.AddWithValue("@Address", bb);
        cmd.Parameters.AddWithValue("@City", cc);
        cmd.Parameters.AddWithValue("@State", dd);
        cmd.Parameters.AddWithValue("@Phone", ee);
        cmd.Parameters.AddWithValue("@Email", ff);
        cmd.Parameters.AddWithValue("@Connections", gg);
        cmd.Parameters.AddWithValue("@Prefer", hh);
        cmd.Parameters.AddWithValue("@RATINGS", ii);
        cmd.Parameters.AddWithValue("@COMMENTS", jj);
        cmd.ExecuteNonQuery();
        clear();
        conn.Close();

        Literal1.Text = "Thankyou for Submitting your feedback";
    }
    public void clear()
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        if (RadioButton1.Checked)
        {
            RadioButton1.Checked = false;
        }


        if (RadioButton2.Checked)
        {
            RadioButton2.Checked = false;
        }
        if (RadioButton10.Checked)
        {
            RadioButton10.Checked = false;
        }


        if (RadioButton11.Checked)
        {
            RadioButton11.Checked = false;
        }
        if (RadioButton12.Checked)
        {
            RadioButton12.Checked = false;
        }


        if (RadioButton13.Checked)
        {
            RadioButton13.Checked = false;
        } 
        if (RadioButton5.Checked)
        {
            RadioButton5.Checked = false;
        }


        if (RadioButton6.Checked)
        {
            RadioButton6.Checked = false;
        } if (RadioButton7.Checked)
        {
            RadioButton7.Checked = false;
        }
        if (RadioButton8.Checked)
        {
            RadioButton8.Checked = false;
        } if (RadioButton9.Checked)
        {
            RadioButton9.Checked = false;
        }
        TextBox7.Text = "";
    }
    protected void Button2_Click(object sender, EventArgs e)
    {
        
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
        TextBox6.Text = "";
        if (RadioButton1.Checked)
        {
            RadioButton1.Checked = false;
        }
        if (RadioButton2.Checked)
        {
            RadioButton2.Checked = false;
        }
        if (RadioButton10.Checked)
        {
            RadioButton10.Checked = false;
        }
        if (RadioButton11.Checked)
        {
            RadioButton11.Checked = false;
        }
        if (RadioButton12.Checked)
        {
            RadioButton12.Checked = false;
        }
        if (RadioButton13.Checked)
        {
            RadioButton13.Checked = false;
        }
        if (RadioButton5.Checked)
        {
            RadioButton5.Checked = false;
        }
        if (RadioButton6.Checked)
        {
            RadioButton6.Checked = false;
        }
        if (RadioButton7.Checked)
        {
            RadioButton7.Checked = false;
        }
        if (RadioButton8.Checked)
        {
            RadioButton8.Checked = false;
        }
        if (RadioButton9.Checked)
        {
            RadioButton9.Checked = false;
        }
        TextBox7.Text = "";
    }

}
