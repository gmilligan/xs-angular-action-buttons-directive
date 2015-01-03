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
* [HTML Markup](#markup)
* [Attribute Definitions](#attributes)
* [Demos](#demo)

<a name="screenshots"></a>
###Screenshots
#####A Couple Use Scenarios   
![XS Action Buttons in Use](http://common.xybersolve.com/xs-angular-action-buttons/screenshots/2-action-displays.png "XS Action Buttons in Use")

----
<a name="installation"></a>
###Installation
You can install this directive using bower or from directly github. 

#####Bower
``` 

    bower install xs-action-button-directive

```

#####Github
[https://github.com/gmilligan/xs-angular-action-buttons-directive](https://github.com/gmilligan/xs-angular-action-buttons-directive)


####Angular Module Inclusion
Include file into your project 
```html
    
    <script src="../dist/xs-action-buttons-directive.min.js"></script>
    
```

Angular setup: include `xs.action-buttons` into your modules.
```js
    
    angular.module('app', ['xs.action-buttons'])
           // IMPORTANT! - Where are your templates kept?
           // you could put the "xs-action-button-template.html" there. 
           // otherwise, the template path defaults to "./../template"
           .value('XS_ACTION_BUTTONS_TEMPLATE_DIR', './../myTemplates');
           
```

----


<a name="markup"></a>
###Directive Markup
* All buttons are used, "New", "Clone", "Edit" & "Delete" 
* `on-*` events are assigned to controller methods
* If `button-size` is defined, it  must use internal quotes like: "'xs'", to designate it is a string assignment. 

```html
    
    <xs-action-buttons
         button-size: "'xs'"
         has-new="true" 
         has-clone="true"
         has-edit="true"
         has-delete="true"
         delete-confirm-text="Delete"
         delete-cancel-text="Cancel"
         on-delete-confirm="vm.delete(item)"
         on-delete-cancel="vm.cancel(item)"
         on-clone="vm.clone(item)"
         on-edit="vm.edit(item)"
         on-new="vm.new(item)" >
    </xs-action-buttons>

```
----

###A Slimmer Configuration
* "Edit" & "Delete" buttons only 
* `on-*` events assigned to controller methods
* `button-size` is omitted and so defaults to `xs`. 

```html
    
    <xs-action-buttons
         has-edit="true"
         has-delete="true"
         on-delete-confirm="vm.delete(item)"
         on-edit="vm.edit(item)"
    </xs-action-buttons>

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
`delete-confirm-text`| Customize delete confirmation button text.     
`delete-cancel-text` | Customize delete cancel button text.
`on-clone`           | Bind "Clone" event.
`on-edit`            | Bind "Edit" event.
`on-delete-confirm`  | Bind "Confirm Delete" event.
`on-delete-cancel`   | Bind "Cancel" event.

----

<a name="demo"></a>
###Demo of Action Buttons
Here are some demonstrations of the action buttons in use. 

[Demo of Action Button Options](http://common.xybersolve.com/xs-angular-action-buttons/demo/xs-action-buttons-demo-options.html)

