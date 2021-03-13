INSTALL XAMPP
> https://www.how2shout.com/linux/how-to-install-xampp-on-ubuntu-20-04-lts/

Step 1: Download XAMPP for Ubuntu Linux

    The first thing we need is the executable binaries of XAMPP on our Ubuntu 20.04 LTS. For that, we simply visit the official website of this tool. Here is the link. https://www.apachefriends.org/download.html

Step 2: Open Command Terminal

    You can either use the shortcut- CTRL+ALT+T or simply go to Applications from Activities option and search for the Terminal and run it.

Step 3: Change permission and Run XAMPP installer

    By default, whatever we are downloading from the internet using the browser on Linux systems, go into Downloads folder, thus first switch to that first.

    > cd Downloads

    Change the permission of the installer. 755 means read and execute access for everyone and also write access for the owner of the file

    > chmod 755 xampp-linux-*-installer.run

    Run the installer

    > sudo ./xampp-linux-*-installer.run

Step 4: Setup Installer Wizard

    The moment you run the installation command, a XAMP setup wizard will open. Click on the Next button.
    Run Bitnami XAMPP

    Run Bitnami XAMPP

    Select both the components “XAMPP Core files” and XAMPP Developer files and then NEXT.
    Select XAMPP components to install

    Select XAMPP components to install

    By default, all the files will unpack under /opt/lampp.
    Default installation folder

    Default installation folder

    Click on the Finish and the XAMPP will be on your Ubuntu 20.04 LTS system.
    XAMPP installed on Ubuntu Linux

    XAMPP installed on Ubuntu Linux

Step 5: Start Apache and MySQL server

    Go to Manage Server Tab and corresponding to Webster and Database click on the start button. To change their running ports select the Configure one.

Step 6: Stop or Start XAMPP server

    In the future, if you want to stop the service of this tool, simply use the following command with sudo.

    To stop all Xampp running services:

    > sudo /opt/lampp/lampp stop

    And if you want to start them again via command line:

    > sudo /opt/lampp/lampp start