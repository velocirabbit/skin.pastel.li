const template = 'AB1E567804CF000000000B536B696E4D616E6167657203000000000F52656D6F746561626C65436F6C6F7204000000010000005200000955736572466C6F6174010000004700000955736572466C6F6174010000004200000955736572466C6F61740500000041006C00700068006100000955736572466C6F6174000B536B696E4D616E61676572760000001100000043006F006E00740072006F006C0046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F720C0000005400650078007400440069007300610062006C0065006400000F52656D6F746561626C65436F6C6F720F00000043006F006E00740072006F006C00440069007300610062006C0065006400000F52656D6F746561626C65436F6C6F720F0000004D0065007400650072004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F721F00000049006E00610063007400690076006500530065007300730069006F006E0041007200720061006E00670065007200530065006C006500630074006F007200000F52656D6F746561626C65436F6C6F7210000000530075007200660061006300650048006900670068006C006900670068007400000F52656D6F746561626C65436F6C6F720B00000053007500720066006100630065004100720065006100000F52656D6F746561626C65436F6C6F72070000004400650073006B0074006F007000000F52656D6F746561626C65436F6C6F7219000000560069006500770043006800650063006B0043006F006E00740072006F006C0045006E00610062006C00650064004F006E00000F52656D6F746561626C65436F6C6F7211000000450078007400650072006E0061006C005300630072006F006C006C00420061007200000F52656D6F746561626C65436F6C6F721100000049006E007400650072006E0061006C005300630072006F006C006C00420061007200000F52656D6F746561626C65436F6C6F7214000000440065007400610069006C0056006900650077004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F720E00000050007200650066006500720065006E00630065007300540061006200000F52656D6F746561626C65436F6C6F720E000000530065006C0065006300740069006F006E004600720061006D006500000F52656D6F746561626C65436F6C6F721100000043006F006E00740072006F006C004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F720E000000430068006F006F00730065006E00440065006600610075006C007400000F52656D6F746561626C65436F6C6F720D000000430068006F006F00730065006E005200650063006F0072006400000F52656D6F746561626C65436F6C6F7210000000430068006F006F00730065006E005000720065004C0069007300740065006E00000F52656D6F746561626C65436F6C6F720C000000520061006E0067006500440065006600610075006C007400000F52656D6F746561626C65436F6C6F720D000000520061006E0067006500440069007300610062006C0065006400000F52656D6F746561626C65436F6C6F7210000000520061006E0067006500440069007300610062006C00650064004F0066006600000F52656D6F746561626C65436F6C6F72090000004C006500610072006E004D00690064006900000F52656D6F746561626C65436F6C6F72080000004C006500610072006E004B0065007900000F52656D6F746561626C65436F6C6F720A0000004C006500610072006E004D006100630072006F00000F52656D6F746561626C65436F6C6F720E000000520061006E006700650045006400690074004600690065006C006400000F52656D6F746561626C65436F6C6F720F000000520061006E006700650045006400690074004600690065006C0064003200000F52656D6F746561626C65436F6C6F720A0000004200690070006F006C0052006500730065007400000F52656D6F746561626C65436F6C6F721700000041006C007400650072006E006100740069007600650050006F00740069004F0066006600560061006C0075006500000F52656D6F746561626C65436F6C6F7212000000430068006F006F00730065006E0041006C007400650072006E0061007400690076006500000F52656D6F746561626C65436F6C6F720B000000430068006F006F00730065006E0050006C0061007900000F52656D6F746561626C65436F6C6F720500000043006C00690070003100000F52656D6F746561626C65436F6C6F720500000043006C00690070003200000F52656D6F746561626C65436F6C6F720500000043006C00690070003300000F52656D6F746561626C65436F6C6F720500000043006C00690070003400000F52656D6F746561626C65436F6C6F720500000043006C00690070003500000F52656D6F746561626C65436F6C6F720500000043006C00690070003600000F52656D6F746561626C65436F6C6F720500000043006C00690070003700000F52656D6F746561626C65436F6C6F720500000043006C00690070003800000F52656D6F746561626C65436F6C6F720500000043006C00690070003900000F52656D6F746561626C65436F6C6F720600000043006C006900700031003000000F52656D6F746561626C65436F6C6F720600000043006C006900700031003100000F52656D6F746561626C65436F6C6F720600000043006C006900700031003200000F52656D6F746561626C65436F6C6F720600000043006C006900700031003300000F52656D6F746561626C65436F6C6F720600000043006C006900700031003400000F52656D6F746561626C65436F6C6F720600000043006C006900700031003500000F52656D6F746561626C65436F6C6F720600000043006C006900700031003600000F52656D6F746561626C65436F6C6F720E000000530065006C0065006300740069006F006E005000610069006E007400000F52656D6F746561626C65436F6C6F7215000000530065006C0065006300740069006F006E005000610069006E0074005300740061006E00640062007900000F52656D6F746561626C65436F6C6F721100000053007500720066006100630065004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F720F0000004100750074006F006D006100740069006F006E0043006F006C006F007200000F52656D6F746561626C65436F6C6F72090000004C006F006F00700043006F006C006F007200000F52656D6F746561626C65436F6C6F720A00000053006800610064006F0077004400610072006B00000F52656D6F746561626C65436F6C6F720B00000053006800610064006F0077004C006900670068007400000F52656D6F746561626C65436F6C6F721100000044006900730070006C00610079004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F720C000000410062006C00650074006F006E0043006F006C006F007200000F52656D6F746561626C65436F6C6F720D000000570061007600650066006F0072006D0043006F006C006F007200000F52656D6F746561626C65436F6C6F720D000000560065006C006F00630069007400790043006F006C006F007200000F52656D6F746561626C65436F6C6F720500000041006C00650072007400000F52656D6F746561626C65436F6C6F721300000043006F006E00740072006F006C004F006E0046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F721400000043006F006E00740072006F006C004F006600660046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F720F00000043006F006E00740072006F006C0054006500780074004200610063006B00000F52656D6F746561626C65436F6C6F721400000043006F006E00740072006F006C0043006F006E00740072006100730074004600720061006D006500000F52656D6F746561626C65436F6C6F721800000043006F006E00740072006F006C0043006F006E00740072006100730074005400720061006E00730070006F0072007400000F52656D6F746561626C65436F6C6F720E00000043006C006900700053006C006F00740042007500740074006F006E00000F52656D6F746561626C65436F6C6F720A000000420072006F007700730065007200420061007200000F52656D6F746561626C65436F6C6F72120000004100750074006F006D006100740069006F006E00440069007300610062006C0065006400000F52656D6F746561626C65436F6C6F72130000004100750074006F006D006100740069006F006E004D006F007500730065004F00760065007200000F52656D6F746561626C65436F6C6F72130000004D006900640069004E006F00740065004D0069006E00560065006C006F006300690074007900000F52656D6F746561626C65436F6C6F72130000004D006900640069004E006F00740065004D0061007800560065006C006F006300690074007900000F52656D6F746561626C65436F6C6F721600000052006500740072006F0044006900730070006C00610079004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F721A00000052006500740072006F0044006900730070006C00610079004200610063006B00670072006F0075006E0064004C0069006E006500000F52656D6F746561626C65436F6C6F721600000052006500740072006F0044006900730070006C006100790046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F721700000052006500740072006F0044006900730070006C006100790046006F0072006500670072006F0075006E0064003200000F52656D6F746561626C65436F6C6F721E00000052006500740072006F0044006900730070006C006100790046006F0072006500670072006F0075006E006400440069007300610062006C0065006400000F52656D6F746561626C65436F6C6F721100000052006500740072006F0044006900730070006C006100790047007200650065006E00000F52656D6F746561626C65436F6C6F720F00000052006500740072006F0044006900730070006C0061007900520065006400000F52656D6F746561626C65436F6C6F721300000052006500740072006F0044006900730070006C0061007900480061006E0064006C0065003100000F52656D6F746561626C65436F6C6F721300000052006500740072006F0044006900730070006C0061007900480061006E0064006C0065003200000F52656D6F746561626C65436F6C6F721500000052006500740072006F0044006900730070006C00610079005300630061006C0065005400650078007400000F52656D6F746561626C65436F6C6F72120000005400680072006500730068006F006C0064004C0069006E00650043006F006C006F007200000F52656D6F746561626C65436F6C6F72160000004700610069006E0052006500640075006300740069006F006E004C0069006E00650043006F006C006F007200000F52656D6F746561626C65436F6C6F72170000004700610069006E0052006500640075006300740069006F006E004D00650074006500720043006F006C006F007200000F52656D6F746561626C65436F6C6F720F00000049006E007000750074004300750072007600650043006F006C006F007200000F52656D6F746561626C65436F6C6F721600000049006E00700075007400430075007200760065004F00750074006C0069006E00650043006F006C006F007200000F52656D6F746561626C65436F6C6F72100000004F00750074007000750074004300750072007600650043006F006C006F007200000F52656D6F746561626C65436F6C6F72170000004F0075007400700075007400430075007200760065004F00750074006C0069006E00650043006F006C006F007200000F52656D6F746561626C65436F6C6F721400000053007000650063007400720075006D00440065006600610075006C00740043006F006C006F007200000F52656D6F746561626C65436F6C6F721800000053007000650063007400720075006D0041006C007400650072006E006100740069007600650043006F006C006F007200000F52656D6F746561626C65436F6C6F72090000004F00700065007200610074006F0072003100000F52656D6F746561626C65436F6C6F72090000004F00700065007200610074006F0072003200000F52656D6F746561626C65436F6C6F72090000004F00700065007200610074006F0072003300000F52656D6F746561626C65436F6C6F72090000004F00700065007200610074006F0072003400000F52656D6F746561626C65436F6C6F72110000004400720075006D005200610063006B005300630072006F006C006C00650072003100000F52656D6F746561626C65436F6C6F72110000004400720075006D005200610063006B005300630072006F006C006C00650072003200000F52656D6F746561626C65436F6C6F7211000000460069006C006C00650064004400720075006D005200610063006B00500061006400000F52656D6F746561626C65436F6C6F72100000005300750072006600610063006500410072006500610046006F00630075007300000F52656D6F746561626C65436F6C6F720B00000046007200650065007A00650043006F006C006F007200000F52656D6F746561626C65436F6C6F720900000047007200690064004C006100620065006C00000F52656D6F746561626C65436F6C6F721100000041007200720061006E006700650072004700720069006400540069006C0065007300000F52656D6F746561626C65436F6C6F720F000000440065007400610069006C004700720069006400540069006C0065007300000F52656D6F746561626C65436F6C6F7218000000540072006500650043006F006C0075006D006E0048006500610064004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F7218000000540072006500650043006F006C0075006D006E00480065006100640046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F7216000000540072006500650043006F006C0075006D006E004800650061006400530065006C0065006300740065006400000F52656D6F746561626C65436F6C6F7213000000540072006500650043006F006C0075006D006E00480065006100640046006F00630075007300000F52656D6F746561626C65436F6C6F7215000000540072006500650043006F006C0075006D006E00480065006100640043006F006E00740072006F006C00000F52656D6F746561626C65436F6C6F7219000000540072006500650052006F007700430061007400650067006F007200790046006F0072006500670072006F0075006E006400000F52656D6F746561626C65436F6C6F7219000000540072006500650052006F007700430061007400650067006F00720079004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F721000000053006500610072006300680049006E006400690063006100740069006F006E00000F52656D6F746561626C65436F6C6F721700000053006500610072006300680049006E006400690063006100740069006F006E005300740061006E00640062007900000F52656D6F746561626C65436F6C6F72110000004B00650079005A006F006E0065004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F72140000004B00650079005A006F006E006500430072006F00730073006600610064006500520061006D007000000F52656D6F746561626C65436F6C6F7216000000560065006C006F0063006900740079005A006F006E0065004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F7219000000560065006C006F0063006900740079005A006F006E006500430072006F00730073006600610064006500520061006D007000000F52656D6F746561626C65436F6C6F7216000000530065006C006500630074006F0072005A006F006E0065004200610063006B00670072006F0075006E006400000F52656D6F746561626C65436F6C6F7219000000530065006C006500630074006F0072005A006F006E006500430072006F00730073006600610064006500520061006D007000000F52656D6F746561626C65436F6C6F721A000000560069006500770043006800650063006B0043006F006E00740072006F006C0045006E00610062006C00650064004F0066006600000F52656D6F746561626C65436F6C6F721A000000560069006500770043006800650063006B0043006F006E00740072006F006C00440069007300610062006C00650064004F006E00000F52656D6F746561626C65436F6C6F721B000000560069006500770043006800650063006B0043006F006E00740072006F006C00440069007300610062006C00650064004F0066006600000F52656D6F746561626C65436F6C6F72000955736572466C6F61740100000005000000560061006C007500650012';

export default template;
