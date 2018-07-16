<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="Plans.aspx.cs" Inherits="Plans" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
<center style="background-image: url('img/1886497.jpg')">
    <img src="img/IMG-20160222-WA0001.jpg" style="height: 351px; width: 644px" />
    <img src="img/plans.jpg" style="height: 643px; width: 637px" /><br />
    <br /></center>
      <asp:HyperLink ID="HyperLink1" runat="server" 
        NavigateUrl="~/Registration.aspx" Height="30px"> <font size="xlarge" color = "red"><u>Click Here for Registration</u></font> </asp:HyperLink>
</asp:Content>


