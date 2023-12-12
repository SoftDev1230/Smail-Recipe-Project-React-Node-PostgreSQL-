import React, { useState } from 'react';

import { Modal, Upload } from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Flex   } from 'antd';
import { Layout } from 'antd';


const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

//Text
const onFinish = (values) => (
  console.log('Received values of form:', values)
)

const AddRecipe = () => (

        <Layout className="layout" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

        <Content
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
        }}>
                <Form
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 400,
                    }}
                    autoComplete="on"
                >
                    <Form.List name="ingredients">
                        {(fields, { add, remove }) => (
                            <>
                                <Space>
                                    <Form.Item>
                                        <Flex vertical gap={160}>
                                            <div>
                                                
                                                    <Input
                                                        count={{
                                                        show: true,
                                                        max: 50,
                                                        }}
                                                        defaultValue="Name Your Recipe"
                                                    />
                                            </div>
                                        </Flex>
                                    </Form.Item>
                                </Space>

                                <Space>
                                    <Form.Item>
                                        <Flex vertical gap={160}>
                                            <div>
                                                
                                                    <Input
                                                        count={{
                                                        show: true,
                                                        max: 50,
                                                        }}
                                                        defaultValue="Name Your Recipe"
                                                    />
                                            </div>
                                        </Flex>
                                    </Form.Item>
                                </Space>

                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                        key={key}
                                        style={{
                                            display: 'flex',
                                            marginBottom: 8,
                                        }}
                                        align="center"
                                    >
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'ingredient']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing ingredient',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Ingredient" />
                                        </Form.Item>

                                        <Form.Item
                                            {...restField}
                                            name={[name, 'last']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing amount',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Amount" />
                                        </Form.Item>

                                        <MinusCircleOutlined align="center" onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                        New Ingredient
                                    </Button>
                                </Form.Item>
                            </>
                            
                        )}
                    </Form.List>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
        </Content>
    </Layout>
)

export default AddRecipe;