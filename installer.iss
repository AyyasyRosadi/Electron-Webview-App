[Setup]
AppName=YourAppName
AppVersion=1.0
DefaultDirName={commonpf}\YourDirApp
OutputDir=.
OutputBaseFilename=InstallerName
Compression=lzma
SolidCompression=yes

[Files]
Source: "Location where you put the folder exc: C"\User\Name\MyApp*"; DestDir: "{app}"; Flags: recursesubdirs

[Icons]
Name: "{group}\YourAppName"; Filename: "{app}\exe_file.exe"
Name: "{commondesktop}\YourAppName"; Filename: "{app}\exe_file.exe"

[Run]
Filename: "{app}\exe_file.exe"; Description: "Launch YourAppName"; Flags: nowait postinstall skipifsilent
