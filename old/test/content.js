const xmlStr = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<template>\n' +
    '    <description>Push tweets to HDFS/Solr and visualize using Banana dashboard.</description>\n' +
    '    <name>Twitter Dashboard</name>\n' +
    '    <snippet>\n' +
    '        <connections>\n' +
    '            <id>6347473a-a43c-41b9-a479-b84ed4e3a791</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>ec362d9a-5545-40c2-abcd-cd63a99df2f6</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>success</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>9048c8e5-ca90-4887-8f5a-bc56702f6cd2</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>6361ab29-7374-48f4-ad8c-8a1d4d514519</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>bacb653b-4333-42b1-bd3b-9c84827cedec</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>tweet</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>96f07130-1c26-4798-8732-bce60a0a39e1</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>0d8624b7-7912-47e5-8f72-c37f3bf70549</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>8c9a80d0-8799-46eb-8485-3b3d3f7043c8</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>0</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>tweet</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>96f07130-1c26-4798-8732-bce60a0a39e1</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>aeed4a40-a22b-4f53-8834-f91fd2ef0a9b</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>65ff5699-8974-4033-ae4b-4590663e0094</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>merged</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>349c9fec-fdb3-4328-bbbb-5634b9a7b750</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>d165186c-c35e-46a9-be08-2f9f8cd70063</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>349c9fec-fdb3-4328-bbbb-5634b9a7b750</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>success</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>bacb653b-4333-42b1-bd3b-9c84827cedec</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>a909dbbe-7fd6-43b6-b245-e5fd3a931d29</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>a4a76327-0238-4ac5-96e2-5db2a9131829</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>merged</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>349c9fec-fdb3-4328-bbbb-5634b9a7b750</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>5cab2d74-5c53-49f5-8a57-6bb64c86e73c</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>96f07130-1c26-4798-8732-bce60a0a39e1</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>matched</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>ec362d9a-5545-40c2-abcd-cd63a99df2f6</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <connections>\n' +
    '            <id>1b1390de-6975-45f0-bb69-b760cfd175f3</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold>\n' +
    '            <backPressureObjectThreshold>0</backPressureObjectThreshold>\n' +
    '            <bends>\n' +
    '                <x>197.97891552515216</x>\n' +
    '                <y>1247.9797050727318</y>\n' +
    '            </bends>\n' +
    '            <bends>\n' +
    '                <x>197.97891552515216</x>\n' +
    '                <y>1297.9797050727318</y>\n' +
    '            </bends>\n' +
    '            <destination>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>a4a76327-0238-4ac5-96e2-5db2a9131829</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </destination>\n' +
    '            <flowFileExpiration>0 sec</flowFileExpiration>\n' +
    '            <labelIndex>1</labelIndex>\n' +
    '            <name></name>\n' +
    '            <selectedRelationships>failure</selectedRelationships>\n' +
    '            <source>\n' +
    '                <groupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</groupId>\n' +
    '                <id>a4a76327-0238-4ac5-96e2-5db2a9131829</id>\n' +
    '                <type>PROCESSOR</type>\n' +
    '            </source>\n' +
    '            <zIndex>0</zIndex>\n' +
    '        </connections>\n' +
    '        <processors>\n' +
    '            <id>349c9fec-fdb3-4328-bbbb-5634b9a7b750</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-420.8053325047597</x>\n' +
    '                <y>1053.4114395124363</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Merge Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Generates \'bins\' of FlowFiles and fills each bin as full as possible.\n' +
    '                                    FlowFiles are placed into a bin based on their size and optionally their attributes\n' +
    '                                    (if the &lt;Correlation Attribute&gt; property is set)\n' +
    '                                </description>\n' +
    '                                <displayName>Bin-Packing Algorithm</displayName>\n' +
    '                                <value>Bin-Packing Algorithm</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Combines fragments that are associated by attributes back into a single\n' +
    '                                    cohesive FlowFile. If using this strategy, all FlowFiles must have the attributes\n' +
    '                                    &lt;fragment.identifier&gt;, &lt;fragment.count&gt;, and &lt;fragment.index&gt; or\n' +
    '                                    alternatively (for backward compatibility purposes) &lt;segment.identifier&gt;, &lt;segment.count&gt;,\n' +
    '                                    and &lt;segment.index&gt;. All FlowFiles with the same value for &quot;fragment.identifier&quot;\n' +
    '                                    will be grouped together. All FlowFiles in this group must have the same value for\n' +
    '                                    the &quot;fragment.count&quot; attribute. All FlowFiles in this group must have a\n' +
    '                                    unique value for the &quot;fragment.index&quot; attribute between 0 and the value of\n' +
    '                                    the &quot;fragment.count&quot; attribute.\n' +
    '                                </description>\n' +
    '                                <displayName>Defragment</displayName>\n' +
    '                                <value>Defragment</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Bin-Packing Algorithm</defaultValue>\n' +
    '                            <description>Specifies the algorithm used to merge content. The \'Defragment\' algorithm\n' +
    '                                combines fragments that are associated by attributes back into a single cohesive\n' +
    '                                FlowFile. The \'Bin-Packing Algorithm\' generates a FlowFile populated by arbitrarily\n' +
    '                                chosen FlowFiles\n' +
    '                            </description>\n' +
    '                            <displayName>Merge Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Merge Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Merge Format</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A bin of FlowFiles will be combined into a single TAR file. The FlowFiles\'\n' +
    '                                    &lt;path&gt; attribute will be used to create a directory in the TAR file if the\n' +
    '                                    &lt;Keep Paths&gt; property is set to true; otherwise, all FlowFiles will be added\n' +
    '                                    at the root of the TAR file. If a FlowFile has an attribute named &lt;tar.permissions&gt;\n' +
    '                                    that is 3 characters, each between 0-7, that attribute will be used as the TAR\n' +
    '                                    entry\'s \'mode\'.\n' +
    '                                </description>\n' +
    '                                <displayName>TAR</displayName>\n' +
    '                                <value>TAR</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A bin of FlowFiles will be combined into a single ZIP file. The FlowFiles\'\n' +
    '                                    &lt;path&gt; attribute will be used to create a directory in the ZIP file if the\n' +
    '                                    &lt;Keep Paths&gt; property is set to true; otherwise, all FlowFiles will be added\n' +
    '                                    at the root of the ZIP file. The &lt;Compression Level&gt; property indicates the\n' +
    '                                    ZIP compression to use.\n' +
    '                                </description>\n' +
    '                                <displayName>ZIP</displayName>\n' +
    '                                <value>ZIP</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A bin of FlowFiles will be combined into a single Version 3 FlowFile\n' +
    '                                    Stream\n' +
    '                                </description>\n' +
    '                                <displayName>FlowFile Stream, v3</displayName>\n' +
    '                                <value>FlowFile Stream, v3</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A bin of FlowFiles will be combined into a single Version 2 FlowFile\n' +
    '                                    Stream\n' +
    '                                </description>\n' +
    '                                <displayName>FlowFile Stream, v2</displayName>\n' +
    '                                <value>FlowFile Stream, v2</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A bin of FlowFiles will be combined into a single Version 1 FlowFile\n' +
    '                                    Package\n' +
    '                                </description>\n' +
    '                                <displayName>FlowFile Tar, v1</displayName>\n' +
    '                                <value>FlowFile Tar, v1</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The contents of all FlowFiles will be concatenated together into a single\n' +
    '                                    FlowFile\n' +
    '                                </description>\n' +
    '                                <displayName>Binary Concatenation</displayName>\n' +
    '                                <value>Binary Concatenation</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The Avro contents of all FlowFiles will be concatenated together into a\n' +
    '                                    single FlowFile\n' +
    '                                </description>\n' +
    '                                <displayName>Avro</displayName>\n' +
    '                                <value>Avro</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Binary Concatenation</defaultValue>\n' +
    '                            <description>Determines the format that will be used to merge the content.</description>\n' +
    '                            <displayName>Merge Format</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Merge Format</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Attribute Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>Keep Only Common Attributes</displayName>\n' +
    '                                <value>Keep Only Common Attributes</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>Keep All Unique Attributes</displayName>\n' +
    '                                <value>Keep All Unique Attributes</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Keep Only Common Attributes</defaultValue>\n' +
    '                            <description>Determines which FlowFile attributes should be added to the bundle. If \'Keep\n' +
    '                                All Unique Attributes\' is selected, any attribute on any FlowFile that gets bundled will\n' +
    '                                be kept unless its value conflicts with the value from another FlowFile. If \'Keep Only\n' +
    '                                Common Attributes\' is selected, only the attributes that exist on all FlowFiles in the\n' +
    '                                bundle, with the same value, will be preserved.\n' +
    '                            </description>\n' +
    '                            <displayName>Attribute Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Attribute Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Correlation Attribute Name</key>\n' +
    '                        <value>\n' +
    '                            <description>If specified, like FlowFiles will be binned together, where \'like FlowFiles\'\n' +
    '                                means FlowFiles that have the same value for this Attribute. If not specified, FlowFiles\n' +
    '                                are bundled by the order in which they are pulled from the queue.\n' +
    '                            </description>\n' +
    '                            <displayName>Correlation Attribute Name</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Correlation Attribute Name</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Minimum Number of Entries</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>1</defaultValue>\n' +
    '                            <description>The minimum number of files to include in a bundle</description>\n' +
    '                            <displayName>Minimum Number of Entries</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Minimum Number of Entries</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Number of Entries</key>\n' +
    '                        <value>\n' +
    '                            <description>The maximum number of files to include in a bundle. If not specified, there is\n' +
    '                                no maximum.\n' +
    '                            </description>\n' +
    '                            <displayName>Maximum Number of Entries</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Maximum Number of Entries</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Minimum Group Size</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>0 B</defaultValue>\n' +
    '                            <description>The minimum size of for the bundle</description>\n' +
    '                            <displayName>Minimum Group Size</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Minimum Group Size</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Group Size</key>\n' +
    '                        <value>\n' +
    '                            <description>The maximum size for the bundle. If not specified, there is no maximum.\n' +
    '                            </description>\n' +
    '                            <displayName>Maximum Group Size</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Maximum Group Size</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Max Bin Age</key>\n' +
    '                        <value>\n' +
    '                            <description>The maximum age of a Bin that will trigger a Bin to be complete. Expected\n' +
    '                                format is &lt;duration&gt; &lt;time unit&gt; where &lt;duration&gt; is a positive\n' +
    '                                integer and time unit is one of seconds, minutes, hours\n' +
    '                            </description>\n' +
    '                            <displayName>Max Bin Age</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Max Bin Age</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum number of Bins</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>100</defaultValue>\n' +
    '                            <description>Specifies the maximum number of bins that can be held in memory at any one\n' +
    '                                time\n' +
    '                            </description>\n' +
    '                            <displayName>Maximum number of Bins</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Maximum number of Bins</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Delimiter Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The values of Header, Footer, and Demarcator will be retrieved from the\n' +
    '                                    contents of a file\n' +
    '                                </description>\n' +
    '                                <displayName>Filename</displayName>\n' +
    '                                <value>Filename</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The values of Header, Footer, and Demarcator will be specified as property\n' +
    '                                    values\n' +
    '                                </description>\n' +
    '                                <displayName>Text</displayName>\n' +
    '                                <value>Text</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Filename</defaultValue>\n' +
    '                            <description>Determines if Header, Footer, and Demarcator should point to files containing\n' +
    '                                the respective content, or if the values of the properties should be used as the\n' +
    '                                content.\n' +
    '                            </description>\n' +
    '                            <displayName>Delimiter Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Delimiter Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Header File</key>\n' +
    '                        <value>\n' +
    '                            <description>Filename specifying the header to use. If not specified, no header is supplied.\n' +
    '                                This property is valid only when using the binary-concatenation merge strategy;\n' +
    '                                otherwise, it is ignored.\n' +
    '                            </description>\n' +
    '                            <displayName>Header</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Header File</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Footer File</key>\n' +
    '                        <value>\n' +
    '                            <description>Filename specifying the footer to use. If not specified, no footer is supplied.\n' +
    '                                This property is valid only when using the binary-concatenation merge strategy;\n' +
    '                                otherwise, it is ignored.\n' +
    '                            </description>\n' +
    '                            <displayName>Footer</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Footer File</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Demarcator File</key>\n' +
    '                        <value>\n' +
    '                            <description>Filename specifying the demarcator to use. If not specified, no demarcator is\n' +
    '                                supplied. This property is valid only when using the binary-concatenation merge\n' +
    '                                strategy; otherwise, it is ignored.\n' +
    '                            </description>\n' +
    '                            <displayName>Demarcator</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Demarcator File</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Compression Level</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>0</displayName>\n' +
    '                                <value>0</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>1</displayName>\n' +
    '                                <value>1</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>2</displayName>\n' +
    '                                <value>2</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>3</displayName>\n' +
    '                                <value>3</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>4</displayName>\n' +
    '                                <value>4</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>5</displayName>\n' +
    '                                <value>5</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>6</displayName>\n' +
    '                                <value>6</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>7</displayName>\n' +
    '                                <value>7</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>8</displayName>\n' +
    '                                <value>8</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>9</displayName>\n' +
    '                                <value>9</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>1</defaultValue>\n' +
    '                            <description>Specifies the compression level to use when using the Zip Merge Format; if not\n' +
    '                                using the Zip Merge Format, this value is ignored\n' +
    '                            </description>\n' +
    '                            <displayName>Compression Level</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Compression Level</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Keep Path</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>true</displayName>\n' +
    '                                <value>true</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>false</displayName>\n' +
    '                                <value>false</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>false</defaultValue>\n' +
    '                            <description>If using the Zip or Tar Merge Format, specifies whether or not the FlowFiles\'\n' +
    '                                paths should be included in their entry names; if using other merge strategy, this value\n' +
    '                                is ignored\n' +
    '                            </description>\n' +
    '                            <displayName>Keep Path</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Keep Path</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Merge Strategy</key>\n' +
    '                        <value>Bin-Packing Algorithm</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Merge Format</key>\n' +
    '                        <value>Binary Concatenation</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Attribute Strategy</key>\n' +
    '                        <value>Keep Only Common Attributes</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Correlation Attribute Name</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Minimum Number of Entries</key>\n' +
    '                        <value>20</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Number of Entries</key>\n' +
    '                        <value>1000</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Minimum Group Size</key>\n' +
    '                        <value>0 B</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Group Size</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Max Bin Age</key>\n' +
    '                        <value>120 seconds</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum number of Bins</key>\n' +
    '                        <value>100</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Delimiter Strategy</key>\n' +
    '                        <value>Filename</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Header File</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Footer File</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Demarcator File</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Compression Level</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Keep Path</key>\n' +
    '                        <value>false</value>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>MergeContent</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>If the bundle cannot be created, all FlowFiles that would have been used to created the\n' +
    '                    bundle will be transferred to failure\n' +
    '                </description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description>The FlowFile containing the merged content</description>\n' +
    '                <name>merged</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>The FlowFiles that were used to create the bundle</description>\n' +
    '                <name>original</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>false</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.standard.MergeContent</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>a4a76327-0238-4ac5-96e2-5db2a9131829</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-211.02108447484784</x>\n' +
    '                <y>1222.9797050727318</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Hadoop Configuration Resources</key>\n' +
    '                        <value>\n' +
    '                            <description>A file or comma separated list of files which contains the Hadoop file system\n' +
    '                                configuration. Without this, Hadoop will search the classpath for a \'core-site.xml\' and\n' +
    '                                \'hdfs-site.xml\' file or will revert to a default configuration.\n' +
    '                            </description>\n' +
    '                            <displayName>Hadoop Configuration Resources</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Hadoop Configuration Resources</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Principal</key>\n' +
    '                        <value>\n' +
    '                            <description>Kerberos principal to authenticate as. Requires nifi.kerberos.krb5.file to be\n' +
    '                                set in your nifi.properties\n' +
    '                            </description>\n' +
    '                            <displayName>Kerberos Principal</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Kerberos Principal</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Keytab</key>\n' +
    '                        <value>\n' +
    '                            <description>Kerberos keytab associated with the principal. Requires nifi.kerberos.krb5.file\n' +
    '                                to be set in your nifi.properties\n' +
    '                            </description>\n' +
    '                            <displayName>Kerberos Keytab</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Kerberos Keytab</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Relogin Period</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>4 hours</defaultValue>\n' +
    '                            <description>Period of time which should pass before attempting a kerberos relogin\n' +
    '                            </description>\n' +
    '                            <displayName>Kerberos Relogin Period</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Kerberos Relogin Period</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Directory</key>\n' +
    '                        <value>\n' +
    '                            <description>The parent HDFS directory to which files should be written</description>\n' +
    '                            <displayName>Directory</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Directory</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Conflict Resolution Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>replace</displayName>\n' +
    '                                <value>replace</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>ignore</displayName>\n' +
    '                                <value>ignore</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>fail</displayName>\n' +
    '                                <value>fail</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>fail</defaultValue>\n' +
    '                            <description>Indicates what should happen when a file with the same name already exists in\n' +
    '                                the output directory\n' +
    '                            </description>\n' +
    '                            <displayName>Conflict Resolution Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Conflict Resolution Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Block Size</key>\n' +
    '                        <value>\n' +
    '                            <description>Size of each block as written to HDFS. This overrides the Hadoop\n' +
    '                                Configuration\n' +
    '                            </description>\n' +
    '                            <displayName>Block Size</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Block Size</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>IO Buffer Size</key>\n' +
    '                        <value>\n' +
    '                            <description>Amount of memory to use to buffer file contents during IO. This overrides the\n' +
    '                                Hadoop Configuration\n' +
    '                            </description>\n' +
    '                            <displayName>IO Buffer Size</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>IO Buffer Size</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replication</key>\n' +
    '                        <value>\n' +
    '                            <description>Number of times that HDFS will replicate each file. This overrides the Hadoop\n' +
    '                                Configuration\n' +
    '                            </description>\n' +
    '                            <displayName>Replication</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Replication</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Permissions umask</key>\n' +
    '                        <value>\n' +
    '                            <description>A umask represented as an octal number which determines the permissions of\n' +
    '                                files written to HDFS. This overrides the Hadoop Configuration dfs.umaskmode\n' +
    '                            </description>\n' +
    '                            <displayName>Permissions umask</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Permissions umask</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Remote Owner</key>\n' +
    '                        <value>\n' +
    '                            <description>Changes the owner of the HDFS file to this value after it is written. This only\n' +
    '                                works if NiFi is running as a user that has HDFS super user privilege to change owner\n' +
    '                            </description>\n' +
    '                            <displayName>Remote Owner</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Remote Owner</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Remote Group</key>\n' +
    '                        <value>\n' +
    '                            <description>Changes the group of the HDFS file to this value after it is written. This only\n' +
    '                                works if NiFi is running as a user that has HDFS super user privilege to change group\n' +
    '                            </description>\n' +
    '                            <displayName>Remote Group</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Remote Group</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Compression codec</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>NONE</displayName>\n' +
    '                                <value>NONE</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>DEFAULT</displayName>\n' +
    '                                <value>DEFAULT</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>BZIP</displayName>\n' +
    '                                <value>BZIP</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>GZIP</displayName>\n' +
    '                                <value>GZIP</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>LZ4</displayName>\n' +
    '                                <value>LZ4</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>SNAPPY</displayName>\n' +
    '                                <value>SNAPPY</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>AUTOMATIC</displayName>\n' +
    '                                <value>AUTOMATIC</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>NONE</defaultValue>\n' +
    '                            <description></description>\n' +
    '                            <displayName>Compression codec</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Compression codec</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Hadoop Configuration Resources</key>\n' +
    '                        <value>/etc/hadoop/conf/core-site.xml</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Principal</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Keytab</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Kerberos Relogin Period</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Directory</key>\n' +
    '                        <value>/tmp/tweets_staging</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Conflict Resolution Strategy</key>\n' +
    '                        <value>replace</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Block Size</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>IO Buffer Size</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replication</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Permissions umask</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Remote Owner</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Remote Group</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Compression codec</key>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>PutHDFS</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description>Files that could not be written to HDFS for some reason are transferred to this\n' +
    '                    relationship\n' +
    '                </description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>Files that have been successfully written to HDFS are transferred to this relationship\n' +
    '                </description>\n' +
    '                <name>success</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>false</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.hadoop.PutHDFS</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>9048c8e5-ca90-4887-8f5a-bc56702f6cd2</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-606.4306205910673</x>\n' +
    '                <y>337.11872516216107</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Twitter Endpoint</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The endpoint that provides public data, aka a \'garden hose\'</description>\n' +
    '                                <displayName>Sample Endpoint</displayName>\n' +
    '                                <value>Sample Endpoint</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>The endpoint that provides access to all tweets</description>\n' +
    '                                <displayName>Firehose Endpoint</displayName>\n' +
    '                                <value>Firehose Endpoint</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Endpoint that allows the stream to be filtered by specific terms or User\n' +
    '                                    IDs\n' +
    '                                </description>\n' +
    '                                <displayName>Filter Endpoint</displayName>\n' +
    '                                <value>Filter Endpoint</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Sample Endpoint</defaultValue>\n' +
    '                            <description>Specifies which endpoint data should be pulled from</description>\n' +
    '                            <displayName>Twitter Endpoint</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Twitter Endpoint</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Consumer Key</key>\n' +
    '                        <value>\n' +
    '                            <description>The Consumer Key provided by Twitter</description>\n' +
    '                            <displayName>Consumer Key</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Consumer Key</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Consumer Secret</key>\n' +
    '                        <value>\n' +
    '                            <description>The Consumer Secret provided by Twitter</description>\n' +
    '                            <displayName>Consumer Secret</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Consumer Secret</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>true</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Access Token</key>\n' +
    '                        <value>\n' +
    '                            <description>The Access Token provided by Twitter</description>\n' +
    '                            <displayName>Access Token</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Access Token</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Access Token Secret</key>\n' +
    '                        <value>\n' +
    '                            <description>The Access Token Secret provided by Twitter</description>\n' +
    '                            <displayName>Access Token Secret</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Access Token Secret</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>true</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Languages</key>\n' +
    '                        <value>\n' +
    '                            <description>A comma-separated list of languages for which tweets should be fetched\n' +
    '                            </description>\n' +
    '                            <displayName>Languages</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Languages</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Terms to Filter On</key>\n' +
    '                        <value>\n' +
    '                            <description>A comma-separated list of terms to filter on. Ignored unless Endpoint is set to\n' +
    '                                \'Filter Endpoint\'. The filter works such that if any term matches, the status update\n' +
    '                                will be retrieved; multiple terms separated by a space function as an \'AND\'. I.e., \'it\n' +
    '                                was, hello\' will retrieve status updates that have either \'hello\' or both \'it\' AND \'was\'\n' +
    '                            </description>\n' +
    '                            <displayName>Terms to Filter On</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Terms to Filter On</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>IDs to Follow</key>\n' +
    '                        <value>\n' +
    '                            <description>A comma-separated list of Twitter User ID\'s to follow. Ignored unless Endpoint\n' +
    '                                is set to \'Filter Endpoint\'.\n' +
    '                            </description>\n' +
    '                            <displayName>IDs to Follow</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>IDs to Follow</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Locations to Filter On</key>\n' +
    '                        <value>\n' +
    '                            <description>A comma-separated list of coordinates specifying one or more bounding boxes to\n' +
    '                                filter on.Each bounding box is specified by a pair of coordinates in the format:\n' +
    '                                swLon,swLat,neLon,neLat. Multiple bounding boxes can be specified as such:\n' +
    '                                swLon1,swLat1,neLon1,neLat1,swLon2,swLat2,neLon2,neLat2.Ignored unless Endpoint is set\n' +
    '                                to \'Filter Endpoint\'.\n' +
    '                            </description>\n' +
    '                            <displayName>Locations to Filter On</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Locations to Filter On</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Twitter Endpoint</key>\n' +
    '                        <value>Filter Endpoint</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Consumer Key</key>\n' +
    '                        <value>g28NxesU1Vpk12IBXCnIWs2Ur</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Consumer Secret</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Access Token</key>\n' +
    '                        <value>2885109412-UDQfXEUV2cQTYqCIbnsU7JtYqOaAksJCi6gbMgS</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Access Token Secret</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Languages</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Terms to Filter On</key>\n' +
    '                        <value>AAPL,ORCL,GOOG,MSFT,DELL</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>IDs to Follow</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Locations to Filter On</key>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>Grab Garden Hose</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description>All status updates will be routed to this relationship</description>\n' +
    '                <name>success</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>false</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.twitter.GetTwitter</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>bacb653b-4333-42b1-bd3b-9c84827cedec</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-421.607482225033</x>\n' +
    '                <y>877.078640346602</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Regular Expression</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>(?s:^.*$)</defaultValue>\n' +
    '                            <description>The Search Value to search for in the FlowFile content. Only used for \'Literal\n' +
    '                                Replace\' and \'Regex Replace\' matching strategies\n' +
    '                            </description>\n' +
    '                            <displayName>Search Value</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Regular Expression</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replacement Value</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>$1</defaultValue>\n' +
    '                            <description>The value to insert using the \'Replacement Strategy\'. Using &quot;Regex Replace&quot;\n' +
    '                                back-references to Regular Expression capturing groups are supported, but\n' +
    '                                back-references that reference capturing groups that do not exist in the regular\n' +
    '                                expression will be treated as literal value. Back References may also be referenced\n' +
    '                                using the Expression Language, as \'$1\', \'$2\', etc. The single-tick marks MUST be\n' +
    '                                included, as these variables are not &quot;Standard&quot; attribute names (attribute\n' +
    '                                names must be quoted unless they contain only numbers, letters, and _).\n' +
    '                            </description>\n' +
    '                            <displayName>Replacement Value</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Replacement Value</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Character Set</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>UTF-8</defaultValue>\n' +
    '                            <description>The Character Set in which the file is encoded</description>\n' +
    '                            <displayName>Character Set</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Character Set</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Buffer Size</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>1 MB</defaultValue>\n' +
    '                            <description>Specifies the maximum amount of data to buffer (per file or per line, depending\n' +
    '                                on the Evaluation Mode) in order to apply the replacement. If \'Entire Text\' (in\n' +
    '                                Evaluation Mode) is selected and the FlowFile is larger than this value, the FlowFile\n' +
    '                                will be routed to \'failure\'. In \'Line-by-Line\' Mode, if a single line is larger than\n' +
    '                                this value, the FlowFile will be routed to \'failure\'. A default value of 1 MB is\n' +
    '                                provided, primarily for \'Entire Text\' mode. In \'Line-by-Line\' Mode, a value such as 8 KB\n' +
    '                                or 16 KB is suggested. This value is ignored if the &lt;Replacement Strategy&gt;\n' +
    '                                property is set to one of: Append, Prepend, Always Replace\n' +
    '                            </description>\n' +
    '                            <displayName>Maximum Buffer Size</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Maximum Buffer Size</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replacement Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Insert the Replacement Value at the beginning of the FlowFile or the\n' +
    '                                    beginning of each line (depending on the Evaluation Mode). For &quot;Line-by-Line&quot;\n' +
    '                                    Evaluation Mode, the value will be prepended to each line. For &quot;Entire Text&quot;\n' +
    '                                    evaluation mode, the value will be prepended to the entire text.\n' +
    '                                </description>\n' +
    '                                <displayName>Prepend</displayName>\n' +
    '                                <value>Prepend</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Insert the Replacement Value at the end of the FlowFile or the end of each\n' +
    '                                    line (depending on the Evluation Mode). For &quot;Line-by-Line&quot; Evaluation\n' +
    '                                    Mode, the value will be appended to each line. For &quot;Entire Text&quot;\n' +
    '                                    evaluation mode, the value will be appended to the entire text.\n' +
    '                                </description>\n' +
    '                                <displayName>Append</displayName>\n' +
    '                                <value>Append</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Interpret the Search Value as a Regular Expression and replace all matches\n' +
    '                                    with the Replacement Value. The Replacement Value may reference Capturing Groups\n' +
    '                                    used in the Search Value by using a dollar-sign followed by the Capturing Group\n' +
    '                                    number, such as $1 or $2. If the Search Value is set to .* then everything is\n' +
    '                                    replaced without even evaluating the Regular Expression.\n' +
    '                                </description>\n' +
    '                                <displayName>Regex Replace</displayName>\n' +
    '                                <value>Regex Replace</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Search for all instances of the Search Value and replace the matches with\n' +
    '                                    the Replacement Value.\n' +
    '                                </description>\n' +
    '                                <displayName>Literal Replace</displayName>\n' +
    '                                <value>Literal Replace</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Always replaces the entire line or the entire contents of the FlowFile\n' +
    '                                    (depending on the value of the &lt;Evaluation Mode&gt; property) and does not bother\n' +
    '                                    searching for any value. When this strategy is chosen, the &lt;Search Value&gt;\n' +
    '                                    property is ignored.\n' +
    '                                </description>\n' +
    '                                <displayName>Always Replace</displayName>\n' +
    '                                <value>Always Replace</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Regex Replace</defaultValue>\n' +
    '                            <description>The strategy for how and what to replace within the FlowFile\'s text content.\n' +
    '                            </description>\n' +
    '                            <displayName>Replacement Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Replacement Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Evaluation Mode</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>Line-by-Line</displayName>\n' +
    '                                <value>Line-by-Line</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>Entire text</displayName>\n' +
    '                                <value>Entire text</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Entire text</defaultValue>\n' +
    '                            <description>Run the \'Replacement Strategy\' against each line separately (Line-by-Line) or\n' +
    '                                buffer the entire file into memory (Entire Text) and run against that.\n' +
    '                            </description>\n' +
    '                            <displayName>Evaluation Mode</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Evaluation Mode</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Regular Expression</key>\n' +
    '                        <value>(?s:^(.*)$)</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replacement Value</key>\n' +
    '                        <value>\n' +
    '                            ${twitter.tweet_id}|${twitter.unixtime}|${twitter.time}|${twitter.handle}|${twitter.msg:replace(\'$\',\'\'):replace(\'\\n\',\'\')}|$1\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Character Set</key>\n' +
    '                        <value>UTF-8</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum Buffer Size</key>\n' +
    '                        <value>1 MB</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Replacement Strategy</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Evaluation Mode</key>\n' +
    '                        <value>Entire text</value>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>ReplaceText</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles that could not be updated are routed to this relationship</description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description>FlowFiles that have been successfully processed are routed to this relationship. This\n' +
    '                    includes both FlowFiles that had text replaced and those that did not.\n' +
    '                </description>\n' +
    '                <name>success</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>true</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.standard.ReplaceText</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>8c9a80d0-8799-46eb-8485-3b3d3f7043c8</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-819.9798518227624</x>\n' +
    '                <y>874.9442826705568</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Solr Type</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A SolrCloud instance.</description>\n' +
    '                                <displayName>Cloud</displayName>\n' +
    '                                <value>Cloud</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A stand-alone Solr instance.</description>\n' +
    '                                <displayName>Standard</displayName>\n' +
    '                                <value>Standard</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Standard</defaultValue>\n' +
    '                            <description>The type of Solr instance, Cloud or Standard.</description>\n' +
    '                            <displayName>Solr Type</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Solr Type</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Solr Location</key>\n' +
    '                        <value>\n' +
    '                            <description>The Solr url for a Solr Type of Standard (ex:\n' +
    '                                http://localhost:8984/solr/gettingstarted), or the ZooKeeper hosts for a Solr Type of\n' +
    '                                Cloud (ex: localhost:9983).\n' +
    '                            </description>\n' +
    '                            <displayName>Solr Location</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Solr Location</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Collection</key>\n' +
    '                        <value>\n' +
    '                            <description>The Solr collection name, only used with a Solr Type of Cloud</description>\n' +
    '                            <displayName>Collection</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Collection</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Content Stream Path</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>/update/json/docs</defaultValue>\n' +
    '                            <description>The path in Solr to post the ContentStream</description>\n' +
    '                            <displayName>Content Stream Path</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Content Stream Path</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Content-Type</key>\n' +
    '                        <value>\n' +
    '                            <defaultValue>application/json</defaultValue>\n' +
    '                            <description>Content-Type being sent to Solr</description>\n' +
    '                            <displayName>Content-Type</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Content-Type</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Commit Within</key>\n' +
    '                        <value>\n' +
    '                            <description>The number of milliseconds before the given update is committed</description>\n' +
    '                            <displayName>Commit Within</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Commit Within</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.1</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.1\' request parameter</description>\n' +
    '                            <displayName>f.1</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.1</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.10</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.10\' request parameter</description>\n' +
    '                            <displayName>f.10</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.10</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.11</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.11\' request parameter</description>\n' +
    '                            <displayName>f.11</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.11</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.2</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.2\' request parameter</description>\n' +
    '                            <displayName>f.2</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.2</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.3</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.3\' request parameter</description>\n' +
    '                            <displayName>f.3</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.3</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.4</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.4\' request parameter</description>\n' +
    '                            <displayName>f.4</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.4</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.5</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.5\' request parameter</description>\n' +
    '                            <displayName>f.5</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.5</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.6</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.6\' request parameter</description>\n' +
    '                            <displayName>f.6</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.6</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.7</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.7\' request parameter</description>\n' +
    '                            <displayName>f.7</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.7</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.8</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.8\' request parameter</description>\n' +
    '                            <displayName>f.8</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.8</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.9</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'f.9\' request parameter</description>\n' +
    '                            <displayName>f.9</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>f.9</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>split</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the value to send for the \'split\' request parameter</description>\n' +
    '                            <displayName>split</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>split</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Solr Type</key>\n' +
    '                        <value>Cloud</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Solr Location</key>\n' +
    '                        <value>localhost:2181</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Collection</key>\n' +
    '                        <value>tweets</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Content Stream Path</key>\n' +
    '                        <value>/update/json/docs</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Content-Type</key>\n' +
    '                        <value>application/json</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Commit Within</key>\n' +
    '                        <value>1000</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.1</key>\n' +
    '                        <value>id:/id</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.10</key>\n' +
    '                        <value>coordinates_s:/coordinates</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.11</key>\n' +
    '                        <value>place_s:/place</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.2</key>\n' +
    '                        <value>text_t:/text</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.3</key>\n' +
    '                        <value>screenName_s:/user/screen_name</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.4</key>\n' +
    '                        <value>language_s:/lang</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.5</key>\n' +
    '                        <value>twitter_created_at_dt:/created_at</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.6</key>\n' +
    '                        <value>tag_ss:/entities/hashtags</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.7</key>\n' +
    '                        <value>originalposter_s:/retweeted_status/user/screen_name</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.8</key>\n' +
    '                        <value>source_s:/source</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>f.9</key>\n' +
    '                        <value>geo_s:/geo</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>split</key>\n' +
    '                        <value>/</value>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>PutSolrContentStream</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles that failed because Solr is unreachable</description>\n' +
    '                <name>connection_failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles that failed for any reason other than Solr being unreachable</description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>The original FlowFile</description>\n' +
    '                <name>success</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>false</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.solr.PutSolrContentStream</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>65ff5699-8974-4033-ae4b-4590663e0094</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-646.7344219501774</x>\n' +
    '                <y>1229.0436455885838</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Directory</key>\n' +
    '                        <value>\n' +
    '                            <description>The directory to which files should be written. You may use expression language\n' +
    '                                such as /aa/bb/${path}\n' +
    '                            </description>\n' +
    '                            <displayName>Directory</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Directory</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Conflict Resolution Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>replace</displayName>\n' +
    '                                <value>replace</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>ignore</displayName>\n' +
    '                                <value>ignore</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>fail</displayName>\n' +
    '                                <value>fail</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>fail</defaultValue>\n' +
    '                            <description>Indicates what should happen when a file with the same name already exists in\n' +
    '                                the output directory\n' +
    '                            </description>\n' +
    '                            <displayName>Conflict Resolution Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Conflict Resolution Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Create Missing Directories</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>true</displayName>\n' +
    '                                <value>true</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>false</displayName>\n' +
    '                                <value>false</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>true</defaultValue>\n' +
    '                            <description>If true, then missing destination directories will be created. If false,\n' +
    '                                flowfiles are penalized and sent to failure.\n' +
    '                            </description>\n' +
    '                            <displayName>Create Missing Directories</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Create Missing Directories</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum File Count</key>\n' +
    '                        <value>\n' +
    '                            <description>Specifies the maximum number of files that can exist in the output directory\n' +
    '                            </description>\n' +
    '                            <displayName>Maximum File Count</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Maximum File Count</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Last Modified Time</key>\n' +
    '                        <value>\n' +
    '                            <description>Sets the lastModifiedTime on the output file to the value of this attribute.\n' +
    '                                Format must be yyyy-MM-dd\'T\'HH:mm:ssZ. You may also use expression language such as\n' +
    '                                ${file.lastModifiedTime}.\n' +
    '                            </description>\n' +
    '                            <displayName>Last Modified Time</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Last Modified Time</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Permissions</key>\n' +
    '                        <value>\n' +
    '                            <description>Sets the permissions on the output file to the value of this attribute. Format\n' +
    '                                must be either UNIX rwxrwxrwx with a - in place of denied permissions (e.g. rw-r--r--)\n' +
    '                                or an octal number (e.g. 644). You may also use expression language such as\n' +
    '                                ${file.permissions}.\n' +
    '                            </description>\n' +
    '                            <displayName>Permissions</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Permissions</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Owner</key>\n' +
    '                        <value>\n' +
    '                            <description>Sets the owner on the output file to the value of this attribute. You may also\n' +
    '                                use expression language such as ${file.owner}.\n' +
    '                            </description>\n' +
    '                            <displayName>Owner</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Owner</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Group</key>\n' +
    '                        <value>\n' +
    '                            <description>Sets the group on the output file to the value of this attribute. You may also\n' +
    '                                use expression language such as ${file.group}.\n' +
    '                            </description>\n' +
    '                            <displayName>Group</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Group</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Directory</key>\n' +
    '                        <value>/tmp/tweets</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Conflict Resolution Strategy</key>\n' +
    '                        <value>fail</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Create Missing Directories</key>\n' +
    '                        <value>true</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Maximum File Count</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Last Modified Time</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Permissions</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Owner</key>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Group</key>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>0</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>PutFile</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>Files that could not be written to the output directory for some reason are transferred to\n' +
    '                    this relationship\n' +
    '                </description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>Files that have been successfully written to the output directory are transferred to this\n' +
    '                    relationship\n' +
    '                </description>\n' +
    '                <name>success</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>false</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.standard.PutFile</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>ec362d9a-5545-40c2-abcd-cd63a99df2f6</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-609.349749009036</x>\n' +
    '                <y>508.0052493626006</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>ERROR</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>4</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Destination</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>flowfile-content</displayName>\n' +
    '                                <value>flowfile-content</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>flowfile-attribute</displayName>\n' +
    '                                <value>flowfile-attribute</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>flowfile-content</defaultValue>\n' +
    '                            <description>Indicates whether the results of the JsonPath evaluation are written to the\n' +
    '                                FlowFile content or a FlowFile attribute; if using attribute, must specify the Attribute\n' +
    '                                Name property. If set to flowfile-content, only one JsonPath may be specified, and the\n' +
    '                                property name is ignored.\n' +
    '                            </description>\n' +
    '                            <displayName>Destination</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Destination</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Return Type</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>auto-detect</displayName>\n' +
    '                                <value>auto-detect</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>json</displayName>\n' +
    '                                <value>json</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>scalar</displayName>\n' +
    '                                <value>scalar</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>auto-detect</defaultValue>\n' +
    '                            <description>Indicates the desired return type of the JSON Path expressions. Selecting\n' +
    '                                \'auto-detect\' will set the return type to \'json\' for a Destination of\n' +
    '                                \'flowfile-content\', and \'scalar\' for a Destination of \'flowfile-attribute\'.\n' +
    '                            </description>\n' +
    '                            <displayName>Return Type</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Return Type</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Path Not Found Behavior</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>warn</displayName>\n' +
    '                                <value>warn</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>ignore</displayName>\n' +
    '                                <value>ignore</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>ignore</defaultValue>\n' +
    '                            <description>Indicates how to handle missing JSON path expressions when destination is set\n' +
    '                                to \'flowfile-attribute\'. Selecting \'warn\' will generate a warning when a JSON path\n' +
    '                                expression is not found.\n' +
    '                            </description>\n' +
    '                            <displayName>Path Not Found Behavior</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Path Not Found Behavior</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Null Value Representation</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>empty string</displayName>\n' +
    '                                <value>empty string</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <displayName>the string \'null\'</displayName>\n' +
    '                                <value>the string \'null\'</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>empty string</defaultValue>\n' +
    '                            <description>Indicates the desired representation of JSON Path expressions resulting in a\n' +
    '                                null value.\n' +
    '                            </description>\n' +
    '                            <displayName>Null Value Representation</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Null Value Representation</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>language</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>language</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>language</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.handle</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.handle</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.handle</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.hashtags</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.hashtags</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.hashtags</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.msg</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.msg</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.msg</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.time</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.time</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.time</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.tweet_id</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.tweet_id</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.tweet_id</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.unixtime</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.unixtime</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.unixtime</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.user</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>twitter.user</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>twitter.user</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Destination</key>\n' +
    '                        <value>flowfile-attribute</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Return Type</key>\n' +
    '                        <value>auto-detect</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Path Not Found Behavior</key>\n' +
    '                        <value>ignore</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>Null Value Representation</key>\n' +
    '                        <value>empty string</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>language</key>\n' +
    '                        <value>$.lang</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.handle</key>\n' +
    '                        <value>$.user.screen_name</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.hashtags</key>\n' +
    '                        <value>$.entities.hashtags[0].text</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.msg</key>\n' +
    '                        <value>$.text</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.time</key>\n' +
    '                        <value>$.created_at</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.tweet_id</key>\n' +
    '                        <value>$.id</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.unixtime</key>\n' +
    '                        <value>$.timestamp_ms</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>twitter.user</key>\n' +
    '                        <value>$.user.name</value>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>25</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>Pull Key Attributes</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles are routed to this relationship when the JsonPath cannot be evaluated against the\n' +
    '                    content of the FlowFile; for instance, if the FlowFile is not valid JSON\n' +
    '                </description>\n' +
    '                <name>failure</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description>FlowFiles are routed to this relationship when the JsonPath is successfully evaluated and\n' +
    '                    the FlowFile is modified as a result\n' +
    '                </description>\n' +
    '                <name>matched</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles are routed to this relationship when the JsonPath does not match the content of\n' +
    '                    the FlowFile and the Destination is set to flowfile-content\n' +
    '                </description>\n' +
    '                <name>unmatched</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>true</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.standard.EvaluateJsonPath</type>\n' +
    '        </processors>\n' +
    '        <processors>\n' +
    '            <id>96f07130-1c26-4798-8732-bce60a0a39e1</id>\n' +
    '            <parentGroupId>f8b4d748-3d58-4479-9086-fc7970dd1b20</parentGroupId>\n' +
    '            <position>\n' +
    '                <x>-611.7635978859892</x>\n' +
    '                <y>686.4838412815459</y>\n' +
    '            </position>\n' +
    '            <config>\n' +
    '                <bulletinLevel>WARN</bulletinLevel>\n' +
    '                <comments></comments>\n' +
    '                <concurrentlySchedulableTaskCount>2</concurrentlySchedulableTaskCount>\n' +
    '                <defaultConcurrentTasks>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>EVENT_DRIVEN</key>\n' +
    '                        <value>0</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>1</value>\n' +
    '                    </entry>\n' +
    '                </defaultConcurrentTasks>\n' +
    '                <defaultSchedulingPeriod>\n' +
    '                    <entry>\n' +
    '                        <key>TIMER_DRIVEN</key>\n' +
    '                        <value>0 sec</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>CRON_DRIVEN</key>\n' +
    '                        <value>* * * * * ?</value>\n' +
    '                    </entry>\n' +
    '                </defaultSchedulingPeriod>\n' +
    '                <descriptors>\n' +
    '                    <entry>\n' +
    '                        <key>Routing Strategy</key>\n' +
    '                        <value>\n' +
    '                            <allowableValues>\n' +
    '                                <description>A copy of the FlowFile will be routed to each relationship whose\n' +
    '                                    corresponding expression evaluates to \'true\'\n' +
    '                                </description>\n' +
    '                                <displayName>Route to Property name</displayName>\n' +
    '                                <value>Route to Property name</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Requires that all user-defined expressions evaluate to \'true\' for the\n' +
    '                                    FlowFile to be considered a match\n' +
    '                                </description>\n' +
    '                                <displayName>Route to \'matched\' if all match</displayName>\n' +
    '                                <value>Route to \'match\' if all match</value>\n' +
    '                            </allowableValues>\n' +
    '                            <allowableValues>\n' +
    '                                <description>Requires that at least one user-defined expression evaluate to \'true\' for\n' +
    '                                    hte FlowFile to be considered a match\n' +
    '                                </description>\n' +
    '                                <displayName>Route to \'matched\' if any matches</displayName>\n' +
    '                                <value>Route to \'match\' if any matches</value>\n' +
    '                            </allowableValues>\n' +
    '                            <defaultValue>Route to Property name</defaultValue>\n' +
    '                            <description>Specifies how to determine which relationship to use when evaluating the\n' +
    '                                Expression Language\n' +
    '                            </description>\n' +
    '                            <displayName>Routing Strategy</displayName>\n' +
    '                            <dynamic>false</dynamic>\n' +
    '                            <name>Routing Strategy</name>\n' +
    '                            <required>true</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>false</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>tweet</key>\n' +
    '                        <value>\n' +
    '                            <description></description>\n' +
    '                            <displayName>tweet</displayName>\n' +
    '                            <dynamic>true</dynamic>\n' +
    '                            <name>tweet</name>\n' +
    '                            <required>false</required>\n' +
    '                            <sensitive>false</sensitive>\n' +
    '                            <supportsEl>true</supportsEl>\n' +
    '                        </value>\n' +
    '                    </entry>\n' +
    '                </descriptors>\n' +
    '                <lossTolerant>false</lossTolerant>\n' +
    '                <penaltyDuration>30 sec</penaltyDuration>\n' +
    '                <properties>\n' +
    '                    <entry>\n' +
    '                        <key>Routing Strategy</key>\n' +
    '                        <value>Route to Property name</value>\n' +
    '                    </entry>\n' +
    '                    <entry>\n' +
    '                        <key>tweet</key>\n' +
    '                        <value>${twitter.msg:isEmpty():not()}</value>\n' +
    '                    </entry>\n' +
    '                </properties>\n' +
    '                <runDurationMillis>25</runDurationMillis>\n' +
    '                <schedulingPeriod>0 sec</schedulingPeriod>\n' +
    '                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n' +
    '                <yieldDuration>1 sec</yieldDuration>\n' +
    '            </config>\n' +
    '            <name>Find only Tweets</name>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>false</autoTerminate>\n' +
    '                <description></description>\n' +
    '                <name>tweet</name>\n' +
    '            </relationships>\n' +
    '            <relationships>\n' +
    '                <autoTerminate>true</autoTerminate>\n' +
    '                <description>FlowFiles that do not match any user-define expression will be routed here</description>\n' +
    '                <name>unmatched</name>\n' +
    '            </relationships>\n' +
    '            <state>STOPPED</state>\n' +
    '            <style/>\n' +
    '            <supportsEventDriven>true</supportsEventDriven>\n' +
    '            <supportsParallelProcessing>true</supportsParallelProcessing>\n' +
    '            <type>org.apache.nifi.processors.standard.RouteOnAttribute</type>\n' +
    '        </processors>\n' +
    '    </snippet>\n' +
    '    <timestamp>12/16/2015 10:33:15 EST</timestamp>\n' +
    '</template>';

const xmlStr2 = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n" +
    "<template encoding-version=\"1.3\">\n" +
    "    <description></description>\n" +
    "    <groupId>bcfff412-0186-1000-c756-367e56a8f13f</groupId>\n" +
    "    <name>test-template</name>\n" +
    "    <snippet>\n" +
    "        <connections>\n" +
    "            <id>16873db5-1f16-3c96-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <backPressureDataSizeThreshold>1 GB</backPressureDataSizeThreshold>\n" +
    "            <backPressureObjectThreshold>10000</backPressureObjectThreshold>\n" +
    "            <bends>\n" +
    "                <x>0.0</x>\n" +
    "                <y>504.0</y>\n" +
    "            </bends>\n" +
    "            <destination>\n" +
    "                <groupId>4f9c0695-b595-34b6-0000-000000000000</groupId>\n" +
    "                <id>d525038d-0258-3414-0000-000000000000</id>\n" +
    "                <type>FUNNEL</type>\n" +
    "            </destination>\n" +
    "            <flowFileExpiration>0 sec</flowFileExpiration>\n" +
    "            <labelIndex>0</labelIndex>\n" +
    "            <loadBalanceCompression>DO_NOT_COMPRESS</loadBalanceCompression>\n" +
    "            <loadBalancePartitionAttribute></loadBalancePartitionAttribute>\n" +
    "            <loadBalanceStatus>LOAD_BALANCE_NOT_CONFIGURED</loadBalanceStatus>\n" +
    "            <loadBalanceStrategy>DO_NOT_LOAD_BALANCE</loadBalanceStrategy>\n" +
    "            <name></name>\n" +
    "            <selectedRelationships>success</selectedRelationships>\n" +
    "            <source>\n" +
    "                <groupId>4f9c0695-b595-34b6-0000-000000000000</groupId>\n" +
    "                <id>b9a8b376-d4d6-37a8-0000-000000000000</id>\n" +
    "                <type>PROCESSOR</type>\n" +
    "            </source>\n" +
    "            <zIndex>0</zIndex>\n" +
    "        </connections>\n" +
    "        <funnels>\n" +
    "            <id>d48eaec9-94cb-3424-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>192.0</x>\n" +
    "                <y>848.0</y>\n" +
    "            </position>\n" +
    "        </funnels>\n" +
    "        <funnels>\n" +
    "            <id>d525038d-0258-3414-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>144.0</x>\n" +
    "                <y>800.0</y>\n" +
    "            </position>\n" +
    "        </funnels>\n" +
    "        <inputPorts>\n" +
    "            <id>393a77b5-5222-3e2c-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>144.0</x>\n" +
    "                <y>536.0</y>\n" +
    "            </position>\n" +
    "            <allowRemoteAccess>true</allowRemoteAccess>\n" +
    "            <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n" +
    "            <name>MyInput</name>\n" +
    "            <state>STOPPED</state>\n" +
    "            <transmitting>false</transmitting>\n" +
    "            <type>INPUT_PORT</type>\n" +
    "            <validationErrors>'Port 'MyInput'' is invalid because Output connection for port 'MyInput' is not defined.</validationErrors>\n" +
    "        </inputPorts>\n" +
    "        <labels>\n" +
    "            <id>ef59a3fa-e092-3758-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>144.0</x>\n" +
    "                <y>0.0</y>\n" +
    "            </position>\n" +
    "            <height>148.0</height>\n" +
    "            <label>This is my label</label>\n" +
    "            <style>\n" +
    "                <entry>\n" +
    "                    <key>font-size</key>\n" +
    "                    <value>12px</value>\n" +
    "                </entry>\n" +
    "            </style>\n" +
    "            <width>148.0</width>\n" +
    "            <zIndex>0</zIndex>\n" +
    "        </labels>\n" +
    "        <outputPorts>\n" +
    "            <id>a74b7208-f0ff-388f-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>384.0</x>\n" +
    "                <y>616.0</y>\n" +
    "            </position>\n" +
    "            <allowRemoteAccess>true</allowRemoteAccess>\n" +
    "            <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n" +
    "            <name>MyOutput</name>\n" +
    "            <state>STOPPED</state>\n" +
    "            <transmitting>false</transmitting>\n" +
    "            <type>OUTPUT_PORT</type>\n" +
    "        </outputPorts>\n" +
    "        <processors>\n" +
    "            <id>b9a8b376-d4d6-37a8-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>144.0</x>\n" +
    "                <y>192.0</y>\n" +
    "            </position>\n" +
    "            <bundle>\n" +
    "                <artifact>nifi-standard-nar</artifact>\n" +
    "                <group>org.apache.nifi</group>\n" +
    "                <version>1.20.0</version>\n" +
    "            </bundle>\n" +
    "            <config>\n" +
    "                <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>\n" +
    "                <bulletinLevel>WARN</bulletinLevel>\n" +
    "                <comments></comments>\n" +
    "                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n" +
    "                <descriptors>\n" +
    "                    <entry>\n" +
    "                        <key>Input Directory</key>\n" +
    "                        <value>\n" +
    "                            <name>Input Directory</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>File Filter</key>\n" +
    "                        <value>\n" +
    "                            <name>File Filter</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Path Filter</key>\n" +
    "                        <value>\n" +
    "                            <name>Path Filter</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Batch Size</key>\n" +
    "                        <value>\n" +
    "                            <name>Batch Size</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Keep Source File</key>\n" +
    "                        <value>\n" +
    "                            <name>Keep Source File</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Recurse Subdirectories</key>\n" +
    "                        <value>\n" +
    "                            <name>Recurse Subdirectories</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Polling Interval</key>\n" +
    "                        <value>\n" +
    "                            <name>Polling Interval</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Ignore Hidden Files</key>\n" +
    "                        <value>\n" +
    "                            <name>Ignore Hidden Files</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Minimum File Age</key>\n" +
    "                        <value>\n" +
    "                            <name>Minimum File Age</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Maximum File Age</key>\n" +
    "                        <value>\n" +
    "                            <name>Maximum File Age</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Minimum File Size</key>\n" +
    "                        <value>\n" +
    "                            <name>Minimum File Size</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Maximum File Size</key>\n" +
    "                        <value>\n" +
    "                            <name>Maximum File Size</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                </descriptors>\n" +
    "                <executionNode>ALL</executionNode>\n" +
    "                <lossTolerant>false</lossTolerant>\n" +
    "                <maxBackoffPeriod>10 mins</maxBackoffPeriod>\n" +
    "                <penaltyDuration>30 sec</penaltyDuration>\n" +
    "                <properties>\n" +
    "                    <entry>\n" +
    "                        <key>Input Directory</key>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>File Filter</key>\n" +
    "                        <value>[^\\.].*</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Path Filter</key>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Batch Size</key>\n" +
    "                        <value>10</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Keep Source File</key>\n" +
    "                        <value>false</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Recurse Subdirectories</key>\n" +
    "                        <value>true</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Polling Interval</key>\n" +
    "                        <value>0 sec</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Ignore Hidden Files</key>\n" +
    "                        <value>true</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Minimum File Age</key>\n" +
    "                        <value>0 sec</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Maximum File Age</key>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Minimum File Size</key>\n" +
    "                        <value>0 B</value>\n" +
    "                    </entry>\n" +
    "                    <entry>\n" +
    "                        <key>Maximum File Size</key>\n" +
    "                    </entry>\n" +
    "                </properties>\n" +
    "                <retryCount>10</retryCount>\n" +
    "                <runDurationMillis>0</runDurationMillis>\n" +
    "                <schedulingPeriod>0 sec</schedulingPeriod>\n" +
    "                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n" +
    "                <yieldDuration>1 sec</yieldDuration>\n" +
    "            </config>\n" +
    "            <executionNodeRestricted>false</executionNodeRestricted>\n" +
    "            <name>GetFile</name>\n" +
    "            <relationships>\n" +
    "                <autoTerminate>false</autoTerminate>\n" +
    "                <name>success</name>\n" +
    "                <retry>false</retry>\n" +
    "            </relationships>\n" +
    "            <state>STOPPED</state>\n" +
    "            <style/>\n" +
    "            <type>org.apache.nifi.processors.standard.GetFile</type>\n" +
    "        </processors>\n" +
    "        <processors>\n" +
    "            <id>dfe55aaf-e716-3480-0000-000000000000</id>\n" +
    "            <parentGroupId>4f9c0695-b595-34b6-0000-000000000000</parentGroupId>\n" +
    "            <position>\n" +
    "                <x>496.0</x>\n" +
    "                <y>320.0</y>\n" +
    "            </position>\n" +
    "            <bundle>\n" +
    "                <artifact>nifi-standard-nar</artifact>\n" +
    "                <group>org.apache.nifi</group>\n" +
    "                <version>1.20.0</version>\n" +
    "            </bundle>\n" +
    "            <config>\n" +
    "                <backoffMechanism>PENALIZE_FLOWFILE</backoffMechanism>\n" +
    "                <bulletinLevel>WARN</bulletinLevel>\n" +
    "                <comments></comments>\n" +
    "                <concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount>\n" +
    "                <descriptors>\n" +
    "                    <entry>\n" +
    "                        <key>Routing Strategy</key>\n" +
    "                        <value>\n" +
    "                            <name>Routing Strategy</name>\n" +
    "                        </value>\n" +
    "                    </entry>\n" +
    "                </descriptors>\n" +
    "                <executionNode>ALL</executionNode>\n" +
    "                <lossTolerant>false</lossTolerant>\n" +
    "                <maxBackoffPeriod>10 mins</maxBackoffPeriod>\n" +
    "                <penaltyDuration>30 sec</penaltyDuration>\n" +
    "                <properties>\n" +
    "                    <entry>\n" +
    "                        <key>Routing Strategy</key>\n" +
    "                        <value>Route to Property name</value>\n" +
    "                    </entry>\n" +
    "                </properties>\n" +
    "                <retryCount>10</retryCount>\n" +
    "                <runDurationMillis>25</runDurationMillis>\n" +
    "                <schedulingPeriod>0 sec</schedulingPeriod>\n" +
    "                <schedulingStrategy>TIMER_DRIVEN</schedulingStrategy>\n" +
    "                <yieldDuration>1 sec</yieldDuration>\n" +
    "            </config>\n" +
    "            <executionNodeRestricted>false</executionNodeRestricted>\n" +
    "            <name>RouteOnAttribute</name>\n" +
    "            <relationships>\n" +
    "                <autoTerminate>false</autoTerminate>\n" +
    "                <name>unmatched</name>\n" +
    "                <retry>false</retry>\n" +
    "            </relationships>\n" +
    "            <state>STOPPED</state>\n" +
    "            <style/>\n" +
    "            <type>org.apache.nifi.processors.standard.RouteOnAttribute</type>\n" +
    "        </processors>\n" +
    "    </snippet>\n" +
    "    <timestamp>03/07/2023 17:16:48 UTC</timestamp>\n" +
    "</template>\n"

const xmlStr3 = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><template><description>This flow demonstrates how to call an HTTP service based on an incoming FlowFile, and route the original FlowFile based on the status code returned from the invocation. In this example, every 30 seconds a FlowFile is produced, an attribute is added to the FlowFile that sets q=nifi, the google.com is invoked for that FlowFile, and any response with a 200 is routed to a relationship called 200.</description><name>InvokeHttp And Route Original On Status</name><snippet><connections><id>f944d7d5-626a-4100-93f5-e13a145d1b45</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold><backPressureObjectThreshold>0</backPressureObjectThreshold><destination><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>ffcc8819-75f5-4811-9952-a7d66effacb0</id><type>PROCESSOR</type></destination><flowFileExpiration>0 sec</flowFileExpiration><labelIndex>1</labelIndex><name></name><selectedRelationships>Original</selectedRelationships><source><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>e829b880-ef17-432a-b387-04e4b964c28a</id><type>PROCESSOR</type></source><zIndex>0</zIndex></connections><connections><id>0352020c-9fdf-4388-8960-ac46dd714bea</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold><backPressureObjectThreshold>0</backPressureObjectThreshold><destination><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>e829b880-ef17-432a-b387-04e4b964c28a</id><type>PROCESSOR</type></destination><flowFileExpiration>0 sec</flowFileExpiration><labelIndex>1</labelIndex><name></name><selectedRelationships>success</selectedRelationships><source><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>719d5fb9-cd96-4491-b48d-79a91d6b5d79</id><type>PROCESSOR</type></source><zIndex>0</zIndex></connections><connections><id>f06a2356-c839-4272-ad43-4328b95df7c4</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold><backPressureObjectThreshold>0</backPressureObjectThreshold><bends><x>1273.863850933559</x><y>310.17145282997745</y></bends><bends><x>1273.863850933559</x><y>360.17145282997745</y></bends><destination><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>e829b880-ef17-432a-b387-04e4b964c28a</id><type>PROCESSOR</type></destination><flowFileExpiration>0 sec</flowFileExpiration><labelIndex>1</labelIndex><name></name><selectedRelationships>Failure</selectedRelationships><selectedRelationships>Retry</selectedRelationships><source><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>e829b880-ef17-432a-b387-04e4b964c28a</id><type>PROCESSOR</type></source><zIndex>0</zIndex></connections><connections><id>b4e79c52-4342-4215-893e-b56bcc1982dc</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold><backPressureObjectThreshold>0</backPressureObjectThreshold><destination><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>83ca901a-efe0-4d97-a121-d162f2a053ad</id><type>PROCESSOR</type></destination><flowFileExpiration>0 sec</flowFileExpiration><labelIndex>1</labelIndex><name></name><selectedRelationships>200</selectedRelationships><source><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>ffcc8819-75f5-4811-9952-a7d66effacb0</id><type>PROCESSOR</type></source><zIndex>0</zIndex></connections><connections><id>9d1b23ac-05e2-47a4-9423-9cb0f73219d3</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><backPressureDataSizeThreshold>0 MB</backPressureDataSizeThreshold><backPressureObjectThreshold>0</backPressureObjectThreshold><destination><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>719d5fb9-cd96-4491-b48d-79a91d6b5d79</id><type>PROCESSOR</type></destination><flowFileExpiration>0 sec</flowFileExpiration><labelIndex>1</labelIndex><name></name><selectedRelationships>success</selectedRelationships><source><groupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</groupId><id>f96be8b1-78b2-42f2-96a5-759deefae932</id><type>PROCESSOR</type></source><zIndex>0</zIndex></connections><processors><id>719d5fb9-cd96-4491-b48d-79a91d6b5d79</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><position><x>862.8694051327777</x><y>94.09914524330755</y></position><config><bulletinLevel>WARN</bulletinLevel><comments></comments><concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount><defaultConcurrentTasks><entry><key>TIMER_DRIVEN</key><value>1</value></entry><entry><key>EVENT_DRIVEN</key><value>0</value></entry><entry><key>CRON_DRIVEN</key><value>1</value></entry></defaultConcurrentTasks><defaultSchedulingPeriod><entry><key>TIMER_DRIVEN</key><value>0 sec</value></entry><entry><key>CRON_DRIVEN</key><value>* * * * * ?</value></entry></defaultSchedulingPeriod><descriptors><entry><key>Delete Attributes Expression</key><value><description>Regular expression for attributes to be deleted from flowfiles.</description><displayName>Delete Attributes Expression</displayName><dynamic>false</dynamic><name>Delete Attributes Expression</name><required>false</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry><entry><key>q</key><value><description></description><displayName>q</displayName><dynamic>true</dynamic><name>q</name><required>false</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry></descriptors><lossTolerant>false</lossTolerant><penaltyDuration>30 sec</penaltyDuration><properties><entry><key>Delete Attributes Expression</key></entry><entry><key>q</key><value>nifi</value></entry></properties><runDurationMillis>0</runDurationMillis><schedulingPeriod>0 sec</schedulingPeriod><schedulingStrategy>TIMER_DRIVEN</schedulingStrategy><yieldDuration>1 sec</yieldDuration></config><name>q=nifi</name><relationships><autoTerminate>false</autoTerminate><description>All FlowFiles are routed to this relationship</description><name>success</name></relationships><state>STOPPED</state><style/><supportsEventDriven>true</supportsEventDriven><supportsParallelProcessing>true</supportsParallelProcessing><type>org.apache.nifi.processors.attributes.UpdateAttribute</type></processors><processors><id>f96be8b1-78b2-42f2-96a5-759deefae932</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><position><x>317.9999593319965</x><y>89.00000793709417</y></position><config><bulletinLevel>WARN</bulletinLevel><comments></comments><concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount><defaultConcurrentTasks><entry><key>TIMER_DRIVEN</key><value>1</value></entry><entry><key>EVENT_DRIVEN</key><value>0</value></entry><entry><key>CRON_DRIVEN</key><value>1</value></entry></defaultConcurrentTasks><defaultSchedulingPeriod><entry><key>TIMER_DRIVEN</key><value>0 sec</value></entry><entry><key>CRON_DRIVEN</key><value>* * * * * ?</value></entry></defaultSchedulingPeriod><descriptors><entry><key>File Size</key><value><description>The size of the file that will be used</description><displayName>File Size</displayName><dynamic>false</dynamic><name>File Size</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Batch Size</key><value><defaultValue>1</defaultValue><description>The number of FlowFiles to be transferred in each invocation</description><displayName>Batch Size</displayName><dynamic>false</dynamic><name>Batch Size</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Data Format</key><value><allowableValues><displayName>Binary</displayName><value>Binary</value></allowableValues><allowableValues><displayName>Text</displayName><value>Text</value></allowableValues><defaultValue>Binary</defaultValue><description>Specifies whether the data should be Text or Binary</description><displayName>Data Format</displayName><dynamic>false</dynamic><name>Data Format</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Unique FlowFiles</key><value><allowableValues><displayName>true</displayName><value>true</value></allowableValues><allowableValues><displayName>false</displayName><value>false</value></allowableValues><defaultValue>false</defaultValue><description>If true, each FlowFile that is generated will be unique. If false, a random value will be generated and all FlowFiles will get the same content but this offers much higher throughput</description><displayName>Unique FlowFiles</displayName><dynamic>false</dynamic><name>Unique FlowFiles</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry></descriptors><lossTolerant>false</lossTolerant><penaltyDuration>30 sec</penaltyDuration><properties><entry><key>File Size</key><value>10 b</value></entry><entry><key>Batch Size</key></entry><entry><key>Data Format</key></entry><entry><key>Unique FlowFiles</key></entry></properties><runDurationMillis>0</runDurationMillis><schedulingPeriod>30 sec</schedulingPeriod><schedulingStrategy>TIMER_DRIVEN</schedulingStrategy><yieldDuration>1 sec</yieldDuration></config><name>Source</name><relationships><autoTerminate>false</autoTerminate><description></description><name>success</name></relationships><state>STOPPED</state><style/><supportsEventDriven>false</supportsEventDriven><supportsParallelProcessing>true</supportsParallelProcessing><type>org.apache.nifi.processors.standard.GenerateFlowFile</type></processors><processors><id>83ca901a-efe0-4d97-a121-d162f2a053ad</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><position><x>877.6148838100909</x><y>646.8078335626049</y></position><config><bulletinLevel>WARN</bulletinLevel><comments></comments><concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount><defaultConcurrentTasks><entry><key>TIMER_DRIVEN</key><value>1</value></entry><entry><key>EVENT_DRIVEN</key><value>0</value></entry><entry><key>CRON_DRIVEN</key><value>1</value></entry></defaultConcurrentTasks><defaultSchedulingPeriod><entry><key>TIMER_DRIVEN</key><value>0 sec</value></entry><entry><key>CRON_DRIVEN</key><value>* * * * * ?</value></entry></defaultSchedulingPeriod><descriptors><entry><key>Hash Attribute Name</key><value><defaultValue>hash.value</defaultValue><description>The name of the FlowFile Attribute into which the Hash Value should be written. If the value already exists, it will be overwritten</description><displayName>Hash Attribute Name</displayName><dynamic>false</dynamic><name>Hash Attribute Name</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Hash Algorithm</key><value><allowableValues><displayName>RIPEMD320</displayName><value>RIPEMD320</value></allowableValues><allowableValues><displayName>SHA-1</displayName><value>SHA-1</value></allowableValues><allowableValues><displayName>SHA-384</displayName><value>SHA-384</value></allowableValues><allowableValues><displayName>RIPEMD160</displayName><value>RIPEMD160</value></allowableValues><allowableValues><displayName>SHA</displayName><value>SHA</value></allowableValues><allowableValues><displayName>WHIRLPOOL</displayName><value>WHIRLPOOL</value></allowableValues><allowableValues><displayName>GOST3411</displayName><value>GOST3411</value></allowableValues><allowableValues><displayName>SHA-224</displayName><value>SHA-224</value></allowableValues><allowableValues><displayName>SHA-256</displayName><value>SHA-256</value></allowableValues><allowableValues><displayName>MD2</displayName><value>MD2</value></allowableValues><allowableValues><displayName>RIPEMD128</displayName><value>RIPEMD128</value></allowableValues><allowableValues><displayName>MD4</displayName><value>MD4</value></allowableValues><allowableValues><displayName>SHA-512</displayName><value>SHA-512</value></allowableValues><allowableValues><displayName>RIPEMD256</displayName><value>RIPEMD256</value></allowableValues><allowableValues><displayName>TIGER</displayName><value>TIGER</value></allowableValues><allowableValues><displayName>MD5</displayName><value>MD5</value></allowableValues><defaultValue>MD5</defaultValue><description>Determines what hashing algorithm should be used to perform the hashing function</description><displayName>Hash Algorithm</displayName><dynamic>false</dynamic><name>Hash Algorithm</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry></descriptors><lossTolerant>false</lossTolerant><penaltyDuration>30 sec</penaltyDuration><properties><entry><key>Hash Attribute Name</key></entry><entry><key>Hash Algorithm</key></entry></properties><runDurationMillis>0</runDurationMillis><schedulingPeriod>0 sec</schedulingPeriod><schedulingStrategy>TIMER_DRIVEN</schedulingStrategy><yieldDuration>1 sec</yieldDuration></config><name>HashContent</name><relationships><autoTerminate>true</autoTerminate><description>Any FlowFile that cannot be processed successfully will be sent to this relationship without any attribute being added</description><name>failure</name></relationships><relationships><autoTerminate>true</autoTerminate><description>FlowFiles that are process successfully will be sent to this relationship</description><name>success</name></relationships><state>STOPPED</state><style/><supportsEventDriven>true</supportsEventDriven><supportsParallelProcessing>true</supportsParallelProcessing><type>org.apache.nifi.processors.standard.HashContent</type></processors><processors><id>e829b880-ef17-432a-b387-04e4b964c28a</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><position><x>864.863850933559</x><y>285.17145282997745</y></position><config><bulletinLevel>WARN</bulletinLevel><comments></comments><concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount><defaultConcurrentTasks><entry><key>TIMER_DRIVEN</key><value>1</value></entry><entry><key>EVENT_DRIVEN</key><value>0</value></entry><entry><key>CRON_DRIVEN</key><value>1</value></entry></defaultConcurrentTasks><defaultSchedulingPeriod><entry><key>TIMER_DRIVEN</key><value>0 sec</value></entry><entry><key>CRON_DRIVEN</key><value>* * * * * ?</value></entry></defaultSchedulingPeriod><descriptors><entry><key>HTTP Method</key><value><defaultValue>GET</defaultValue><description>HTTP request method (GET, POST, PUT, DELETE, HEAD, OPTIONS). Arbitrary methods are also supported but will be sent without a message body.</description><displayName>HTTP Method</displayName><dynamic>false</dynamic><name>HTTP Method</name><required>true</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry><entry><key>Remote URL</key><value><description>Remote URL which will be connected to, including scheme, host, port, path.</description><displayName>Remote URL</displayName><dynamic>false</dynamic><name>Remote URL</name><required>true</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry><entry><key>SSL Context Service</key><value><allowableValues><displayName>StandardSSLContextService</displayName><value>1f4a6e32-f65b-4879-ab97-fea616f422f2</value></allowableValues><allowableValues><displayName>StandardSSLContextService</displayName><value>44cf39bc-7ec0-4809-b0bb-96f6426efd81</value></allowableValues><allowableValues><displayName>StandardSSLContextService</displayName><value>c4cad782-a3c7-4a9c-8f80-106799964c63</value></allowableValues><description>The SSL Context Service used to provide client certificate information for TLS/SSL (https) connections.</description><displayName>SSL Context Service</displayName><dynamic>false</dynamic><identifiesControllerService>org.apache.nifi.ssl.SSLContextService</identifiesControllerService><name>SSL Context Service</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Connection Timeout</key><value><defaultValue>5 secs</defaultValue><description>Max wait time for connection to remote service.</description><displayName>Connection Timeout</displayName><dynamic>false</dynamic><name>Connection Timeout</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Read Timeout</key><value><defaultValue>15 secs</defaultValue><description>Max wait time for response from remote service.</description><displayName>Read Timeout</displayName><dynamic>false</dynamic><name>Read Timeout</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Include Date Header</key><value><allowableValues><displayName>True</displayName><value>True</value></allowableValues><allowableValues><displayName>False</displayName><value>False</value></allowableValues><defaultValue>True</defaultValue><description>Include an RFC-2616 Date header in the request.</description><displayName>Include Date Header</displayName><dynamic>false</dynamic><name>Include Date Header</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Follow Redirects</key><value><allowableValues><displayName>True</displayName><value>True</value></allowableValues><allowableValues><displayName>False</displayName><value>False</value></allowableValues><defaultValue>True</defaultValue><description>Follow HTTP redirects issued by remote server.</description><displayName>Follow Redirects</displayName><dynamic>false</dynamic><name>Follow Redirects</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Attributes to Send</key><value><description>Regular expression that defines which attributes to send as HTTP headers in the request. If not defined, no attributes are sent as headers. Also any dynamic properties set will be sent as headers. The dynamic property key will be the header key and the dynamic property value will be interpreted as expression language will be the header value.</description><displayName>Attributes to Send</displayName><dynamic>false</dynamic><name>Attributes to Send</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Basic Authentication Username</key><value><description>The username to be used by the client to authenticate against the Remote URL.  Cannot include control characters (0-31), ':', or DEL (127).</description><displayName>Basic Authentication Username</displayName><dynamic>false</dynamic><name>Basic Authentication Username</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Basic Authentication Password</key><value><description>The password to be used by the client to authenticate against the Remote URL.</description><displayName>Basic Authentication Password</displayName><dynamic>false</dynamic><name>Basic Authentication Password</name><required>false</required><sensitive>true</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Proxy Host</key><value><description>The fully qualified hostname or IP address of the proxy server</description><displayName>Proxy Host</displayName><dynamic>false</dynamic><name>Proxy Host</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Proxy Port</key><value><description>The port of the proxy server</description><displayName>Proxy Port</displayName><dynamic>false</dynamic><name>Proxy Port</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Put Response Body In Attribute</key><value><description>If set, the response body received back will be put into an attribute of the original FlowFile instead of a separate FlowFile. The attribute key to put to is determined by evaluating value of this property. </description><displayName>Put Response Body In Attribute</displayName><dynamic>false</dynamic><name>Put Response Body In Attribute</name><required>false</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry><entry><key>Max Length To Put In Attribute</key><value><defaultValue>256</defaultValue><description>If routing the response body to an attribute of the original (by setting the &quot;Put response body in attribute&quot; property or by receiving an error status code), the number of characters put to the attribute value will be at most this amount. This is important because attributes are held in memory and large attributes will quickly cause out of memory issues. If the output goes longer than this value, it will be truncated to fit. Consider making this smaller if able.</description><displayName>Max Length To Put In Attribute</displayName><dynamic>false</dynamic><name>Max Length To Put In Attribute</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Digest Authentication</key><value><allowableValues><displayName>true</displayName><value>true</value></allowableValues><allowableValues><displayName>false</displayName><value>false</value></allowableValues><defaultValue>false</defaultValue><description>Whether to communicate with the website using Digest Authentication. 'Basic Authentication Username' and 'Basic Authentication Password' are used for authentication.</description><displayName>Use Digest Authentication</displayName><dynamic>false</dynamic><name>Digest Authentication</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Always Output Response</key><value><allowableValues><displayName>true</displayName><value>true</value></allowableValues><allowableValues><displayName>false</displayName><value>false</value></allowableValues><defaultValue>false</defaultValue><description>Will force a response FlowFile to be generated and routed to the 'Response' relationship regardless of what the server status code received is or if the processor is configured to put the server response body in the request attribute. In the later configuration a request FlowFile with the response body in the attribute and a typical response FlowFile will be emitted to their respective relationships.</description><displayName>Always Output Response</displayName><dynamic>false</dynamic><name>Always Output Response</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Trusted Hostname</key><value><description>Bypass the normal truststore hostname verifier to allow the specified remote hostname as trusted. Enabling this property has MITM security implications, use wisely. Will still accept other connections based on the normal truststore hostname verifier. Only valid with SSL (HTTPS) connections.</description><displayName>Trusted Hostname</displayName><dynamic>false</dynamic><name>Trusted Hostname</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>Add Response Headers to Request</key><value><allowableValues><displayName>true</displayName><value>true</value></allowableValues><allowableValues><displayName>false</displayName><value>false</value></allowableValues><defaultValue>false</defaultValue><description>Enabling this property saves all the response headers to the original request. This may be when the response headers are needed but a response is not generated due to the status code received.</description><displayName>Add Response Headers to Request</displayName><dynamic>false</dynamic><name>Add Response Headers to Request</name><required>false</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry></descriptors><lossTolerant>false</lossTolerant><penaltyDuration>30 sec</penaltyDuration><properties><entry><key>HTTP Method</key></entry><entry><key>Remote URL</key><value>http://www.google.com/search?q=${q}&amp;rct=j</value></entry><entry><key>SSL Context Service</key></entry><entry><key>Connection Timeout</key></entry><entry><key>Read Timeout</key></entry><entry><key>Include Date Header</key></entry><entry><key>Follow Redirects</key></entry><entry><key>Attributes to Send</key></entry><entry><key>Basic Authentication Username</key></entry><entry><key>Basic Authentication Password</key></entry><entry><key>Proxy Host</key></entry><entry><key>Proxy Port</key></entry><entry><key>Put Response Body In Attribute</key></entry><entry><key>Max Length To Put In Attribute</key></entry><entry><key>Digest Authentication</key></entry><entry><key>Always Output Response</key></entry><entry><key>Trusted Hostname</key></entry><entry><key>Add Response Headers to Request</key></entry></properties><runDurationMillis>0</runDurationMillis><schedulingPeriod>0 sec</schedulingPeriod><schedulingStrategy>TIMER_DRIVEN</schedulingStrategy><yieldDuration>1 sec</yieldDuration></config><name>Search Google</name><relationships><autoTerminate>false</autoTerminate><description>The original FlowFile will be routed on any type of connection failure, timeout or general exception. It will have new attributes detailing the request.</description><name>Failure</name></relationships><relationships><autoTerminate>true</autoTerminate><description>The original FlowFile will be routed on any status code that should NOT be retried (1xx, 3xx, 4xx status codes).  It will have new attributes detailing the request.</description><name>No Retry</name></relationships><relationships><autoTerminate>false</autoTerminate><description>The original FlowFile will be routed upon success (2xx status codes). It will have new attributes detailing the success of the request.</description><name>Original</name></relationships><relationships><autoTerminate>true</autoTerminate><description>A Response FlowFile will be routed upon success (2xx status codes). If the 'Output Response Regardless' property is true then the response will be sent to this relationship regardless of the status code received.</description><name>Response</name></relationships><relationships><autoTerminate>false</autoTerminate><description>The original FlowFile will be routed on any status code that can be retried (5xx status codes). It will have new attributes detailing the request.</description><name>Retry</name></relationships><state>STOPPED</state><style/><supportsEventDriven>false</supportsEventDriven><supportsParallelProcessing>true</supportsParallelProcessing><type>org.apache.nifi.processors.standard.InvokeHTTP</type></processors><processors><id>ffcc8819-75f5-4811-9952-a7d66effacb0</id><parentGroupId>5ba45800-7ae7-4c79-aa77-e4296320a8fe</parentGroupId><position><x>862.7192586484027</x><y>464.2159169413056</y></position><config><bulletinLevel>WARN</bulletinLevel><comments></comments><concurrentlySchedulableTaskCount>1</concurrentlySchedulableTaskCount><defaultConcurrentTasks><entry><key>TIMER_DRIVEN</key><value>1</value></entry><entry><key>EVENT_DRIVEN</key><value>0</value></entry><entry><key>CRON_DRIVEN</key><value>1</value></entry></defaultConcurrentTasks><defaultSchedulingPeriod><entry><key>TIMER_DRIVEN</key><value>0 sec</value></entry><entry><key>CRON_DRIVEN</key><value>* * * * * ?</value></entry></defaultSchedulingPeriod><descriptors><entry><key>Routing Strategy</key><value><allowableValues><description>A copy of the FlowFile will be routed to each relationship whose corresponding expression evaluates to 'true'</description><displayName>Route to Property name</displayName><value>Route to Property name</value></allowableValues><allowableValues><description>Requires that all user-defined expressions evaluate to 'true' for the FlowFile to be considered a match</description><displayName>Route to 'matched' if all match</displayName><value>Route to 'match' if all match</value></allowableValues><allowableValues><description>Requires that at least one user-defined expression evaluate to 'true' for hte FlowFile to be considered a match</description><displayName>Route to 'matched' if any matches</displayName><value>Route to 'match' if any matches</value></allowableValues><defaultValue>Route to Property name</defaultValue><description>Specifies how to determine which relationship to use when evaluating the Expression Language</description><displayName>Routing Strategy</displayName><dynamic>false</dynamic><name>Routing Strategy</name><required>true</required><sensitive>false</sensitive><supportsEl>false</supportsEl></value></entry><entry><key>200</key><value><description></description><displayName>200</displayName><dynamic>true</dynamic><name>200</name><required>false</required><sensitive>false</sensitive><supportsEl>true</supportsEl></value></entry></descriptors><lossTolerant>false</lossTolerant><penaltyDuration>30 sec</penaltyDuration><properties><entry><key>Routing Strategy</key><value>Route to Property name</value></entry><entry><key>200</key><value>${invokehttp.status.code:equals(200)}</value></entry></properties><runDurationMillis>0</runDurationMillis><schedulingPeriod>0 sec</schedulingPeriod><schedulingStrategy>TIMER_DRIVEN</schedulingStrategy><yieldDuration>1 sec</yieldDuration></config><name>Route On Status Code</name><relationships><autoTerminate>false</autoTerminate><description></description><name>200</name></relationships><relationships><autoTerminate>true</autoTerminate><description>FlowFiles that do not match any user-define expression will be routed here</description><name>unmatched</name></relationships><state>STOPPED</state><style/><supportsEventDriven>true</supportsEventDriven><supportsParallelProcessing>true</supportsParallelProcessing><type>org.apache.nifi.processors.standard.RouteOnAttribute</type></processors></snippet><timestamp>12/18/2015 15:52:29 EST</timestamp></template>"

const parser = new DOMParser();
const doc = parser.parseFromString(xmlStr, "application/xml");
// print the name of the root element or error message
const errorNode = doc.querySelector("parsererror");
if (errorNode) {
    console.log("error while parsing");
} else {
    console.log(doc.documentElement.nodeName);
    // create the div element
    const myDiagramDiv = document.createElement("div");
    // set the div's attributes
    myDiagramDiv.id = "myDiagramDiv";
    myDiagramDiv.style.height = "500px";
    myDiagramDiv.style.width = "500px";
    myDiagramDiv.style.outline = "solid"
    myDiagramDiv.style.position = "relative"
    // append the div to the end of the document body
    // document.body.appendChild(myDiagramDiv);
    // createTemplateDiagram(xmlStr, myDiagramDiv.id)
}

// Test create processor
console.log("Test Processor")
const processorNode = doc.querySelector("processors");
// console.log(processorNode)
const testProcessor = createProcessor(processorNode)
// console.log(JSON.stringify(testProcessor, null, 2))

// Test create Connection
console.log("Test Connections")
const connectionNode = doc.querySelector("connections");
// console.log(connectionNode)
const testConnection = createConnection(connectionNode)
// console.log(JSON.stringify(testConnection, null, 2))

// Test create snippet
console.log("Test snippet")
const snippetNode = doc.querySelector("snippet");
// console.log(snippetNode)
const testSnippet = createSnippet(snippetNode)
// console.log(JSON.stringify(testSnippet, null, 2))

const diagramDiv = document.getElementById("diagram")
const encodingVersion = doc.querySelector("template").getAttribute("encoding-version")
console.log(`Encoding Version ${encodingVersion}`)
if (!encodingVersion) {
    sizing = sizing_no_encoding
} else {
    sizing = sizing_1_3
}
const diagram = createDiagram(diagramDiv, testSnippet)
console.log(testSnippet)

window.addEventListener("nifi:select", (e) => {
    console.log(e.detail)
})

