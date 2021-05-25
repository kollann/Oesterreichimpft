<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<ul>
    @foreach ($vaccinations as $vaccination)
        <li><a href="vaccinations/{{$vaccination->id}}">
                {{$vaccination->id}}</a></li>
    @endforeach
</ul>
</body>
</html>
