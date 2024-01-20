import json
import os
import boto3
from boto3.dynamodb.conditions import Key

def execute_query(pk, sk=None):
    table_name = os.environ.get('TABLE_NAME', 'Restaurant')
    aws_environment_local = os.getenv('AWS_SAM_LOCAL')

    if aws_environment_local:
        print('local dynamodb')
        dynamodb = boto3.resource(
            'dynamodb',
            endpoint_url='http://127.0.0.1:8000'
        )
        table = dynamodb.Table('Restaurant')
    else:
        print('aws dynamodb')
        dynamodb = boto3.resource(
            'dynamodb'
        )
        table = dynamodb.Table('Restaurant')

    response = table.query(KeyConditionExpression=Key('PartitionKey').eq(pk))

    return response["Items"]

menuitems = execute_query('MENU#Starters')
print(menuitems)
