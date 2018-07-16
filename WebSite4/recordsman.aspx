<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="recordsman.aspx.cs" Inherits="recordsman" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" Runat="Server">
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
    DataKeyNames="SrNo" DataSourceID="SqlDataSource1" BackColor="White">
    <Columns>
        <asp:BoundField DataField="SrNo" HeaderText="SrNo" ReadOnly="True" 
            SortExpression="SrNo" />
        <asp:BoundField DataField="Username" HeaderText="Username" 
            SortExpression="Username" />
        <asp:BoundField DataField="Name" HeaderText="Name" SortExpression="Name" />
        <asp:BoundField DataField="Site" HeaderText="Site" SortExpression="Site" />
        <asp:BoundField DataField="OperatorName" HeaderText="OperatorName" 
            SortExpression="OperatorName" />
        <asp:BoundField DataField="IPAddress" HeaderText="IPAddress" 
            SortExpression="IPAddress" />
        <asp:BoundField DataField="ActivationDate" HeaderText="ActivationDate" 
            SortExpression="ActivationDate" />
        <asp:BoundField DataField="RenewDate" HeaderText="RenewDate" 
            SortExpression="RenewDate" />
        <asp:BoundField DataField="ExpiryDate" HeaderText="ExpiryDate" 
            SortExpression="ExpiryDate" />
        <asp:BoundField DataField="PlanName" HeaderText="PlanName" 
            SortExpression="PlanName" />
        <asp:BoundField DataField="ZoneName" HeaderText="ZoneName" 
            SortExpression="ZoneName" />
        <asp:BoundField DataField="BuildingName" HeaderText="BuildingName" 
            SortExpression="BuildingName" />
        <asp:BoundField DataField="BalanceAmount" HeaderText="BalanceAmount" 
            SortExpression="BalanceAmount" />
    </Columns>
</asp:GridView>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:ISPConnectionString %>" 
    SelectCommand="SELECT * FROM [Management]"></asp:SqlDataSource>
</asp:Content>

