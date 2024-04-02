


  function findArray(){
    
    let input = document.getElementById('search').value.trim();
    let radios = document.getElementsByName('flexRadioDefault');
    let radiodefault;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            radiodefault = radios[i].value;
        }
    }
        var arr = [
            {
              "Id": 1,
              "Name": "Home",
              "Url": "/home",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 2,
              "Name": "Paid Claim Lookup",
              "Url": "/claimlookup/paidclaimlookup",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=PaidClaimList-4-19-2021-6_11_pm.xlsx"
            },
            {
              "Id": 3,
              "Name": "Claim Activity",
              "Url": "/claimlookup/claimactivity",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=Billing Config issue.PNG"
            },
            {
              "Id": 4,
              "Name": "Drug Lookup",
              "Url": "/drugsearch/druglookup",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=Drug Look Up Screenn.docx"
            },
            {
              "Id": 5,
              "Name": "Mac Manager",
              "Url": "/drug/macmanager",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi-gfxep3sx9ubinmrj.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=TestDocument.txt"
            },
            {
              "Id": 6,
              "Name": "Formulary Manager",
              "Url": "/drug/formularymanager",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=8bd0825bec8321d1db372b7bc487416a.png"
            },
            {
              "Id": 7,
              "Name": "Cardholder",
              "Url": "/member/cardholder",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=file_example_JPG_500kB.jpg"
            },
            {
              "Id": 8,
              "Name": "Member Require Manager",
              "Url": "/member/memberrequiremanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 9,
              "Name": "MPA Manager",
              "Url": "/member/mpamanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 10,
              "Name": "Member Lookup",
              "Url": "/member/memberlookup",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 12,
              "Name": "Pharmacy Contract Manager",
              "Url": "/pharmacymanagement/pharmacycontractmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 13,
              "Name": "Pharmacy Affiliates",
              "Url": "/pharmacymanagement/pharmacyaffiliates",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 14,
              "Name": "Network Manager",
              "Url": "/pharmacymanagement/networkmanager?type=Pharmacy",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 15,
              "Name": "Pharmacy Credentials",
              "Url": "/pharmacymanagement/pharmacycredentials",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 16,
              "Name": "Tax Table",
              "Url": "/admin/taxtable",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=note (1).PNG"
            },
            {
              "Id": 17,
              "Name": "Manage Test Copy",
              "Url": "/admin/managetestcopy",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 18,
              "Name": "Permissions",
              "Url": "/admin/permissions",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 19,
              "Name": "Client Security Settings",
              "Url": "/admin/clientsecuritysettings",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 20,
              "Name": "User Management",
              "Url": "/admin/usermanagement",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 21,
              "Name": "User Profile",
              "Url": "/admin/userprofile",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 22,
              "Name": "User Role",
              "Url": "/admin/userrole",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=Icon.png"
            },
            {
              "Id": 23,
              "Name": "App Areas",
              "Url": "/admin/apparea",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi-gfxep3sx9ubinmrj.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=note.PNG"
            },
            {
              "Id": 24,
              "Name": "User Group",
              "Url": "/admin/usergroup",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 25,
              "Name": "Process Rules",
              "Url": "/rulesandcalculations/processrules",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 26,
              "Name": "SDC Manager",
              "Url": "/rulesandcalculations/sdcmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 27,
              "Name": "Restriction Rules",
              "Url": "/rulesandcalculations/lookbackrule",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 28,
              "Name": "Dispense Limit Rules",
              "Url": "/rulesandcalculations/dispenselimitrules",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 29,
              "Name": "Dispense Fee Rules",
              "Url": "/rulesandcalculations/dispensefeerules",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 30,
              "Name": "Refill Rules",
              "Url": "/rulesandcalculations/refillrules",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 31,
              "Name": "Copay Rules",
              "Url": "/rulesandcalculations/copayrules",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 32,
              "Name": "Age Rules",
              "Url": "/rulesandcalculations/agerules",
              "ApplicationId": 1,
              "HelpFilePath": "https://pbmapi.dev.rxlogic.com/api/v1/filemanager/UploadFile?directoryPath=Documents/Upload/&name=Sample-RxLogic AgeRule.docx"
            },
            {
              "Id": 33,
              "Name": "Bill Cost Calculators",
              "Url": "/rulesandcalculations/billcostcalculator",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 34,
              "Name": "Cost Lists",
              "Url": "/rulesandcalculations/costlist",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 35,
              "Name": "Cost Calculators",
              "Url": "/rulesandcalculations/costcalculator",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 36,
              "Name": "Subgroup Manager",
              "Url": "/plandesign/subgroupmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 37,
              "Name": "Plan Manager",
              "Url": "/plandesign/planmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 38,
              "Name": "Group Manager",
              "Url": "/plandesign/groupmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 39,
              "Name": "Carrier Manager",
              "Url": "/plandesign/carriermanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 40,
              "Name": "Organization Manager",
              "Url": "/plandesign/organizationmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 41,
              "Name": "Hierarchy",
              "Url": "/plandesign/hierarchy",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 42,
              "Name": "NPI Manager",
              "Url": "/prescriber/npimanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 43,
              "Name": "Step Therapy",
              "Url": "/steptherapy/steptherapy_new",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 44,
              "Name": "Billing Management ap",
              "Url": "/payables",
              "ApplicationId": 2,
              "HelpFilePath": null
            },
            {
              "Id": 45,
              "Name": "Transaction Manager",
              "Url": "/transaction/txmessagemanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 46,
              "Name": "Prescriber Network Manager",
              "Url": "/pharmacymanagement/networkmanager?type=Prescriber",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 47,
              "Name": "Pharmacy Manager",
              "Url": "/pharmacymanagement/pharmacymanager?type=Pharmacy",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 48,
              "Name": "Billing Manager",
              "Url": "/billingmanager/billingmanager",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 49,
              "Name": "Report Builder",
              "Url": "/reportdesigner/reportbuilder",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 50,
              "Name": "Transaction Detail",
              "Url": "/txviewer",
              "ApplicationId": 1,
              "HelpFilePath": null
            },
            {
              "Id": 51,
              "Name": "Manual Drug",
              "Url": "/drugsearch/manualdrug",
              "ApplicationId": 1,
              "HelpFilePath": null
            }
          ];
        var result = [];
        debugger
        if (radiodefault === "startswith") {
            result = arr.filter(name => name.Name.toLowerCase().startsWith(input.toLowerCase()));
        }
        else if (radiodefault === "endswith") {
            result = arr.filter(name => name.Name.toLowerCase().endsWith(input.toLowerCase()));
        }
        else if (radiodefault === "include") {
            result = arr.filter(name => name.Name.toLowerCase().includes(input.toLowerCase()));
        }
        else if (radiodefault === "equalsto") {
            result = arr.filter(name => name.Name.toLowerCase() === input.toLowerCase());
        }
     
        displayResult(result);
    
}
   function displayResult(arr){
    let result1 = document.getElementById('result1');
    let json = JSON.stringify(arr)
    result1.innerHTML =json     ;

   }
    


  