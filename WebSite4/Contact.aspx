<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Contact.aspx.cs" Inherits="Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
    <style type="text/css">
        .style1
        {
            width: 100%;
        }
        .style2
        {
            height: 192px;
        }
        .style3
        {
            width: 609px;
        }
        .style4
        {
            width: 560px;
            height: 230px;
        }
        .style5
    {
    }
        .style6
        {
            height: 25px;
            text-align: center;
        }
        </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <table class="style1" 
        style="border: medium groove #0000FF; background-image: url('img/1886497.jpg');">
        <tr>
            <td colspan="2" style="color: #000000;">
                <table class="style1">
                    <tr>
                        <td class="style2" colspan="2" >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <asp:Image ID="Image2" runat="server" Height="204px" 
                                    ImageUrl="~/img/contact-us.gif" Width="390px" />
                                </td>
                    </tr>
                    <tr>
                        <td class="style3" 
                            
                            style="border-style: groove; border-width: thin; background-image: none; font-family: 'Comic Sans MS';" >
                            <h2 style="color: #000000"><b>
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T10 Networks<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Sai Ganesh Vihar<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Vijaynagar<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Kalyan(E)<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Maharashtra<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           India<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Ph#: +918097903034<br />
                           &nbsp;&nbsp;&nbsp;&nbsp;
                           Email: info@t10.in</b></h2></td>
                        <td style="border-style: groove; border-width: thin; background-image: none;" >
                            <img class="style4" src="img/contactbanner.jpg" /></td>
                    </tr>
                    </table>
            </td>
        </tr>
        <tr>
            <td colspan="2" 
                style="font-family: Algerian; font-size: x-large; color: #FF0000;" 
                class="style6">
                &nbsp;POST YOUR QUERY</td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                NAME</td>
            <td>
                <asp:TextBox ID="TextBox1" runat="server" Width="181px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" 
                    ControlToValidate="TextBox1" ErrorMessage="Please enter name" ForeColor="Red"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                PHONE NO</td>
            <td>
                <asp:TextBox ID="TextBox2" runat="server" TextMode="Phone" Width="181px"></asp:TextBox>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator2" runat="server" 
                    ControlToValidate="TextBox2" ErrorMessage="Please enter phone  no" 
                    ForeColor="Red" ValidationExpression="\d{10}"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                EMAIL ID</td>
            <td>
                <asp:TextBox ID="TextBox3" runat="server" TextMode="Email" Width="181px"></asp:TextBox>
                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" 
                    ControlToValidate="TextBox3" ErrorMessage="Please enter email id" 
                    ForeColor="Red" 
                    ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
            </td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                CITY</td>
            <td>
                <asp:TextBox ID="TextBox4" runat="server" Width="181px"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" 
                    ControlToValidate="TextBox4" ErrorMessage="Please enter city name" 
                    ForeColor="Red"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                ADDRESS</td>
            <td>
                <asp:TextBox ID="TextBox5" runat="server" TextMode="MultiLine"></asp:TextBox>
                <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" 
                    ControlToValidate="TextBox5" ErrorMessage="Please enter address" 
                    ForeColor="Red"></asp:RequiredFieldValidator>
            </td>
        </tr>
        <tr>
            <td class="style5" style="color: #000000">
                QUERY</td>
            <td>
                <asp:TextBox ID="TextBox6" runat="server" TextMode="MultiLine"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td class="style5" colspan="2" style="color: #000000">
                <asp:Button ID="Button4" runat="server" Text="SUBMIT" onclick="Button4_Click" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Button ID="Button5" runat="server" Text="CANCEL" onclick="Button5_Click" />
                <br />
                <br />
                <asp:Literal ID="Literal1" runat="server"></asp:Literal>
            </td>
        </tr>
    </table>
</asp:Content>

