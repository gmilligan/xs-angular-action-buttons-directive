# xs-angular-action-buttons-directive 
- - - -
A simple but useful directive.
Creates configurable action buttons (BootStrap) and wires them up to a controller.
Buttons include: New, Clone, Edit & Delete.
Delete has automatic confirmation mechanism.
Buttons are sizable (xs, sm, md & lg) 

###Table of Contents 
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Attributes](#attributes)
* [HTML Markup](#markup)
* [Demos](#demo)

<a name="screenshots"></a>
###Screenshots
#####A Couple Use Scenarios   
![XS Action Buttons in Use](http://www.xybersolve.com/xs-angular-action-buttons/screenshots/2-action-displays.png "XS Action Buttons in Use")

----
<a name="installation"></a>
###Installation
You can install this directive using bower or from directly github. 

#####Bower
``` 

    bower install xs-action-button-directive

```

#####Github
[https://github.com/xybersolve/xs-angular-action-buttons-directive.git](https://github.com/xybersolve/xs-angular-action-buttons-directive.git)


####Angular Module Inclusion
Include the XyberSolve Action Buttons module `xs.action-buttons` into your project.

Syntax:
```js

    angular.module('app', ['xs.action-buttons'])
           // IMPORTANT! - Where are your templates kept?
           // you can put the "xs-action-button-template.html" there. too.
           // otherwise the path defaults to "./../template"
           .value('TEMPLATE_DIR', './../myTemplates');
           
```

----

<a name="attributes"></a>
###Attributes
Use attributes to toggle action buttons to fit your requirement (sample code below). 
The `has-*` attributes can be set to `false` or just left out to hide the associated element.  

 Attribute           | Functionality
---------------------|----------------------------
`button-size`        | Sets the button size ("xs","sm","md","lg"). Default: "xs". 
`has-delete`         | Toggle "Delete" button display.
`has-clone`          | Toggle "Clone" button display. 
`has-edit`           | Toggle "Edit" button display.     
`has-new`            | Toggle "New" button display. 
`on-clone`           | Bind "Clone" event.
`on-edit`            | Bind "Edit" event.
`on-delete-confirm`  | Bind "Confirm Delete" event.
`on-delete-cancel`   | Bind "Cancel" event.

<a name="markup"></a>
###HTML Markup
* All buttons are used, "New", "Clone", "Edit" & "Delete" 
* `on-*` events are assigned to controller methods
* Note that `button-size` must be defined using internal quotes like: "'xs'", to designate it is a string not a variable. 

```html
    
    <xs-action-buttons
         button-size: "'xs'"
         has-new="true" 
         has-clone="true"
         has-edit="true"
         has-delete="true"
         on-delete-confirm="vm.delete(item)"
         on-delete-cancel="vm.cancel(item)"
         on-clone="vm.clone(item)"
         on-edit="vm.edit(item)"
         on-new="vm.new(item)" >
    </xs-action-buttons>

```
----

<a name="demo"></a>
###Demo of Action Buttons
Here are some demonstrations of the action buttons in use. 

[Demo of Action Button Options](http://common.xybersolve.com/xs-angular-action-buttons/demo/xs-action-buttons-demo-options.html)

